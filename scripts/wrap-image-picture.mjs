/**
 * 构建后处理：把 dist 中引用了站内位图的 <img> 自动包成 <picture>，
 * 优先加载 .webp（由 scripts/generate-webp.py 生成），不支持时回落到原图。
 *
 * 这样无需逐个修改 .astro / markdown 源文件即可让全站图片享受 WebP 体积收益。
 *
 * 用法：node scripts/wrap-image-picture.mjs
 */

import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(import.meta.dirname, '..', 'dist');
const BITMAP = /\.(png|jpe?g)$/i;
const IMG_RE = /<img\b[^>]*>/gi;

if (!fs.existsSync(DIST)) {
  console.error('[wrap-picture] 找不到 dist 目录，请先执行构建');
  process.exit(1);
}

/** 收集所有已存在的 webp 文件，避免逐个 stat */
const webpSet = new Set();
(function collect(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collect(full);
    else if (entry.name.toLowerCase().endsWith('.webp')) webpSet.add(full);
  }
})(DIST);

function resolveTarget(src, htmlFile) {
  if (!src) return null;
  if (/^(https?:)?\/\//i.test(src) || src.startsWith('data:')) return null;
  if (!BITMAP.test(src)) return null;

  let abs;
  if (src.startsWith('/')) {
    abs = path.join(DIST, src);
  } else {
    abs = path.resolve(path.dirname(htmlFile), src.split(/[?#]/)[0]);
  }
  if (!abs.startsWith(DIST)) return null;

  const webp = abs.replace(BITMAP, '.webp');
  return fs.existsSync(webp) ? { webp, src } : null;
}

function wrap(html, htmlFile) {
  let changed = 0;
  const out = html.replace(IMG_RE, (match, offset) => {
    // 已经在 <picture> 里就不重复包裹
    const before = html.slice(0, offset);
    const opened = (before.match(/<picture\b/gi) || []).length;
    const closed = (before.match(/<\/picture\s*>/gi) || []).length;
    if (opened > closed) return match;

    // 已有 srcset / picture 语义的跳过
    if (/\ssrcset\s*=/i.test(match)) return match;

    const srcMatch = match.match(/\ssrc\s*=\s*["']([^"']*)["']/i);
    const target = resolveTarget(srcMatch?.[1], htmlFile);
    if (!target) return match;

    const webpUrl = srcMatch[1].replace(BITMAP, '.webp');
    changed += 1;
    return `<picture><source srcset="${webpUrl}" type="image/webp" />${match}</picture>`;
  });
  return { out, changed };
}

let files = 0;
let total = 0;

(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith('.html')) {
      const html = fs.readFileSync(full, 'utf8');
      const { out, changed } = wrap(html, full);
      if (changed > 0) {
        fs.writeFileSync(full, out);
        files += 1;
        total += changed;
      }
    }
  }
})(DIST);

console.log(`[wrap-picture] 已为 ${total} 张图片加上 WebP 源，覆盖 ${files} 个 HTML 文件`);
