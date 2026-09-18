// 应用商店数据集（与语言无关，全站共享一份，可被浏览器长缓存）。
// 首页首屏只渲染默认分类，其余分类在用户点击 tab 时按需拉取这份数据渲染，
// 避免把约 150 张隐藏卡片的 HTML 塞进首页。
import type { APIRoute } from 'astro';
import { buildAppStoreData } from '../lib/appstore-data';

export const GET: APIRoute = () => {
  const payload = buildAppStoreData();
  return new Response(JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=604800, immutable'
    }
  });
};

export const prerender = true;
