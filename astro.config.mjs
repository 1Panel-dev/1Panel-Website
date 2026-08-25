import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { copyFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import icon from 'astro-icon';

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

export default defineConfig({
  integrations: [tailwind(), react(), icon(), extensionlessComparisonRoutes()],
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
