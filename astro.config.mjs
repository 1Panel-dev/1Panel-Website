import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://1panel.pro',
  integrations: [
    tailwind(),
    react(),
    icon(),
    sitemap({
      filter: (page) => {
        if (page.includes('/404')) return false;
        // 排除本地化 enterprise-edition 重定向页（只有英文版，非英文 locale 302 到英文版）
        if (/\/[a-z]{2}(-[a-z]{2})?\/enterprise-edition$/.test(page.replace('https://1panel.pro', ''))) return false;
        return true;
      },
      serialize(item) {
        const url = item.url.replace('https://1panel.pro', '');
        const segments = url.split('/').filter(Boolean);
        const last = segments[segments.length - 1] || '';

        let priority = 0.5;
        let changefreq = 'monthly';

        if (url === '/' || segments.length === 0) {
          priority = 1.0;
          changefreq = 'daily';
        } else if (last === 'pro-edition' || last === 'enterprise-edition') {
          priority = 0.9;
          changefreq = 'weekly';
        } else if (
          last === 'ai-portal' ||
          last === 'ai-gateway' ||
          last === 'skills-hub' ||
          last === 'user-management' ||
          last === 'virtual-machine' ||
          last === 'security-ops-report'
        ) {
          priority = 0.9;
          changefreq = 'weekly';
        } else if (last === 'blog' || (segments.length >= 2 && segments[0] === 'blog' && segments[1] !== 'blog')) {
          // Blog index or individual blog post
          if (segments.length === 1 && segments[0] === 'blog') {
            priority = 0.8;
            changefreq = 'weekly';
          } else {
            priority = 0.7;
            changefreq = 'monthly';
          }
        } else if (
          last === '1panel-vs-cpanel' ||
          last === '1panel-vs-plesk' ||
          last === '1panel-vs-webmin'
        ) {
          priority = 0.8;
          changefreq = 'monthly';
        } else if (segments[0] === 'apps') {
          priority = 0.6;
          changefreq = 'monthly';
        }

        item.priority = priority;
        item.changefreq = changefreq;
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  output: 'static',
  trailingSlash: 'never',
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
