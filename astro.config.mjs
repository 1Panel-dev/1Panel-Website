import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { copyFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import icon from 'astro-icon';
import { fetchAppStoreData } from './scripts/fetch-1panel-json.mjs';

const comparisonRouteCopies = [
  ['vsbt.html', 'vsbt/index.html'],
  ['vscpanel.html', 'vscpanel/index.html'],
  ['vscpanel/comparison.html', 'vscpanel/comparison/index.html'],
  ['vscpanel/cost.html', 'vscpanel/cost/index.html'],
  ['vswebmin.html', 'vswebmin/index.html'],
];

const extensionlessComparisonRoutes = () => ({
  name: 'extensionless-comparison-routes',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      await Promise.all(
        comparisonRouteCopies.map(async ([source, target]) => {
          const sourcePath = fileURLToPath(new URL(source, dir));
          const targetPath = fileURLToPath(new URL(target, dir));

          await mkdir(dirname(targetPath), { recursive: true });
          await copyFile(sourcePath, targetPath);
        })
      );
    },
  },
});

/**
 * 应用商店数据（src/1panel.json）体积较大且随上游更新，不入库：
 * 构建前拉取最新版本；开发环境仅在缺失时补齐，避免每次启动都等待下载。
 */
const appStoreData = () => ({
  name: 'appstore-data',
  hooks: {
    'astro:config:setup': async ({ command, logger }) => {
      try {
        const status = await fetchAppStoreData({ force: command === 'build', logger });
        if (status === 'created' || status === 'updated') {
          logger.info(`已同步应用商店数据 src/1panel.json (${status})`);
        }
      } catch (error) {
        if (command === 'build') throw error;
        logger.warn(`跳过应用商店数据同步：${error.message}`);
      }
    }
  }
});

export default defineConfig({
  // global.css already includes Tailwind's base, components and utilities.
  integrations: [tailwind({ applyBaseStyles: false }), react(), icon(), extensionlessComparisonRoutes(), appStoreData()],
  site: 'https://1panel.cn',
  output: 'static',
  build: {
    assets: 'assets',
    format: 'file'
  },
  server: {
    host: true,
    port: 4321,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '0afe-240e-3ba-30ea-8e60-a1f8-1835-58fa-6013.ngrok-free.app'
    ]
  }
});
