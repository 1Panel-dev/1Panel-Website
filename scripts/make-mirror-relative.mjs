#!/usr/bin/env node
/**
 * 将构建产物改写为相对路径，供 website-2026 仓库以 /1panel/ 子路径部署使用。
 *
 * - HTML：把根绝对路径（/xxx）按页面深度改写为相对路径（./xxx 或 ../xxx），
 *   并注入 window.__SITE_BASE__ 供运行时拼接站点内路径。
 * - JS：把预加载辅助函数和站点内绝对路径字符串改为基于 window.__SITE_BASE__。
 * - CSS：把 url(/xxx) 改写为相对路径。
 *
 * 用法：node scripts/make-mirror-relative.mjs dist
 */
import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve(process.argv[2] ?? 'dist');
const baseVar = 'window.__SITE_BASE__||"/"';
const attrPattern = '\\b(?:href|src|srcset|poster|action|data-src)';
const htmlAttrRe = new RegExp(`(${attrPattern}=")([^"]*)(")`, 'g');
const jsStringRe = /"(\/(?!\/)[^"\n]*)"/g;
const rootUrlInSrcsetRe = /(^|,\s*)(\/[^\s,]+)/g;
const preloadHelper = 'function(o){return"/"+o}';

const htmlFiles = [];
const jsFiles = [];
const cssFiles = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (entry.name.endsWith('.html')) {
      htmlFiles.push(full);
    } else if (entry.name.endsWith('.js')) {
      jsFiles.push(full);
    } else if (entry.name.endsWith('.css')) {
      cssFiles.push(full);
    }
  }
}

function prefixFor(file) {
  const relDir = path.relative(distDir, path.dirname(file));
  const depth = relDir === '' ? 0 : relDir.split(path.sep).length;
  return depth === 0 ? './' : '../'.repeat(depth);
}

function rewriteUrl(value, prefix) {
  if (!value.startsWith('/') || value.startsWith('//')) return value;
  const normalized = value.replace(/^\/\.\//, '/');
  if (normalized === '/') return prefix;
  return prefix + normalized.slice(1);
}

function rewriteSrcset(value, prefix) {
  return value.replace(
    rootUrlInSrcsetRe,
    (match, separator, url) => separator + rewriteUrl(url, prefix)
  );
}

function rewriteHtmlAttributes(html, prefix) {
  return html.replace(htmlAttrRe, (match, start, value, end) => {
    const next = start.includes('srcset="')
      ? rewriteSrcset(value, prefix)
      : rewriteUrl(value, prefix);
    return `${start}${next}${end}`;
  });
}

async function isFile(relPath) {
  try {
    return (await stat(path.join(distDir, relPath))).isFile();
  } catch {
    return false;
  }
}

async function rewriteHtml(file) {
  const prefix = prefixFor(file);
  const html = await readFile(file, 'utf8');
  const rewritten = rewriteHtmlAttributes(html, prefix);

  if (rewritten.includes('window.__SITE_BASE__')) {
    return writeFile(file, rewritten);
  }
  if (!rewritten.includes('</head>')) {
    throw new Error(`缺少 </head>，无法注入站点基路径: ${file}`);
  }

  const injection = `<script>window.__SITE_BASE__="${prefix}";</script></head>`;
  await writeFile(file, rewritten.replace('</head>', injection));
}

async function rewriteJs(file) {
  const source = await readFile(file, 'utf8');
  let output = source.replace(preloadHelper, `function(o){return(${baseVar})+o}`);

  const literals = [...output.matchAll(jsStringRe)].map((match) => match[1]);
  for (const literal of new Set(literals)) {
    if (!(await isFile(literal.split(/[?#]/)[0]))) continue;
    output = output
      .split(`"${literal}"`)
      .join(`(${baseVar})+"${literal.slice(1)}"`);
  }

  await writeFile(file, output);
}

async function rewriteCss(file) {
  const prefix = prefixFor(file);
  const source = await readFile(file, 'utf8');
  const output = source.replace(
    /url\((['"]?)(\/(?!\/)[^)'"]*)\1\)/g,
    (match, quote, value) => `url(${quote}${rewriteUrl(value, prefix)}${quote})`
  );
  await writeFile(file, output);
}

async function verify() {
  const issues = [];

  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    if (!html.includes('window.__SITE_BASE__')) {
      issues.push(`${file}: 缺少 window.__SITE_BASE__`);
    }
    for (const match of html.matchAll(htmlAttrRe)) {
      const value = match[2];
      if (match[1].includes('srcset="')) {
        for (const url of value.matchAll(rootUrlInSrcsetRe)) {
          issues.push(`${file}: 残留根绝对路径 ${url[2]}`);
        }
      } else if (value.startsWith('/') && !value.startsWith('//')) {
        issues.push(`${file}: 残留根绝对路径 ${value}`);
      }
    }
  }

  for (const file of jsFiles) {
    const js = await readFile(file, 'utf8');
    if (js.includes(preloadHelper)) {
      issues.push(`${file}: 预加载函数未替换`);
    }
    for (const match of js.matchAll(jsStringRe)) {
      if (await isFile(match[1].split(/[?#]/)[0])) {
        issues.push(`${file}: 残留根绝对路径 ${match[1]}`);
      }
    }
  }

  if (issues.length > 0) {
    console.error('镜像路径改写校验失败:');
    for (const issue of issues.slice(0, 20)) console.error(`  - ${issue}`);
    process.exit(1);
  }
}

await walk(distDir);
await Promise.all(htmlFiles.map(rewriteHtml));
await Promise.all(jsFiles.map(rewriteJs));
await Promise.all(cssFiles.map(rewriteCss));
await verify();

console.log(
  `Mirror paths rewritten: ${htmlFiles.length} html, ${jsFiles.length} js, ${cssFiles.length} css`
);
