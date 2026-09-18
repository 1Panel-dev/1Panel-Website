/**
 * 构建／开发前置：把应用商店最新数据同步到 src/1panel.json。
 *
 * src/lib/appstore-data.ts 静态导入该文件（供 /appstore-data.json 端点使用），
 * 而这份数据体积较大、且随上游频繁变化，因此不入库，改由 astro.config.mjs 的
 * astro:config:setup 钩子自动拉取。
 *
 * 用法：
 *   node scripts/fetch-1panel-json.mjs                # 强制拉取最新数据
 *   node scripts/fetch-1panel-json.mjs --if-missing   # 仅在本文件缺失时拉取
 */

import fs from 'node:fs';
import path from 'node:path';

const SOURCE_URL =
  process.env.APPSTORE_DATA_URL || 'https://apps-assets.fit2cloud.com/stable/1panel.json';
const OUT_PATH = path.resolve(import.meta.dirname, '..', 'src', '1panel.json');
const TIMEOUT_MS = 120_000;

/** 校验响应确实是应用商店数据，避免把错误页写进文件 */
function isUsable(text) {
  try {
    const data = JSON.parse(text);
    return Array.isArray(data?.apps) && data.apps.length > 0;
  } catch {
    return false;
  }
}

/**
 * @param {{ force?: boolean, logger?: Pick<Console, 'warn'> }} [options]
 * @returns {Promise<'created' | 'updated' | 'unchanged' | 'skipped' | 'stale'>}
 */
export async function fetchAppStoreData({ force = true, logger = console } = {}) {
  const exists = fs.existsSync(OUT_PATH);
  if (!force && exists) return 'skipped';

  try {
    const response = await fetch(SOURCE_URL, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const text = await response.text();
    if (!isUsable(text)) {
      throw new Error('响应不是合法的应用商店数据（缺少 apps 数组）');
    }

    if (exists && fs.readFileSync(OUT_PATH, 'utf8') === text) return 'unchanged';

    fs.writeFileSync(OUT_PATH, text, 'utf8');
    return exists ? 'updated' : 'created';
  } catch (error) {
    // 拉取失败时不删除已有快照，让构建可以继续
    if (exists) {
      logger.warn(`[appstore] 拉取 ${SOURCE_URL} 失败，沿用现有 src/1panel.json：${error.message}`);
      return 'stale';
    }
    throw new Error(`无法获取应用商店数据 ${SOURCE_URL}：${error.message}`, { cause: error });
  }
}

const invokedDirectly =
  process.argv[1] && path.resolve(process.argv[1]) === import.meta.filename;

if (invokedDirectly) {
  const status = await fetchAppStoreData({ force: !process.argv.includes('--if-missing') });
  console.log(`[appstore] src/1panel.json: ${status}`);
}
