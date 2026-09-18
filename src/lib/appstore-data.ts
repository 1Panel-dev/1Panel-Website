// 应用商店最小数据集：构建一次，供首页（AppStore 组件）与 /appstore-data.json 端点共用，
// 保证服务端渲染的默认分类与前端按需渲染的数据完全一致。
import appStoreData from '../1panel.json';

export interface SlimApp {
  /** name */
  n: string;
  /** icon url */
  i: string;
  /** key（用于 /apps/:key 链接） */
  k: string;
  /** 描述 */
  d: string;
  /** 前两个 tag */
  t: string[];
}

export interface CategoryPayload {
  key: string;
  /** slimApps 下标 */
  apps: number[];
  /** 该分类下的应用总数（用于 tab 上的计数） */
  total: number;
}

export interface AppStorePayload {
  apps: SlimApp[];
  categories: CategoryPayload[];
}

interface RawApp {
  icon?: string;
  name: string;
  additionalProperties?: {
    description?: { zh?: string; en?: string };
    shortDescZh?: string;
    shortDescEn?: string;
    tags?: string[];
    key?: string;
    recommend?: number;
  };
}

function byRecommend(a: RawApp, b: RawApp): number {
  const ar = a.additionalProperties?.recommend || 0;
  const br = b.additionalProperties?.recommend || 0;
  if (ar > 0 && br > 0) return ar - br;
  if (ar > 0 && br === 0) return -1;
  if (ar === 0 && br > 0) return 1;
  return 0;
}

export function getAppDescription(app: RawApp): string {
  return app.additionalProperties?.description?.en || app.additionalProperties?.shortDescEn || 'No description available';
}

let cached: AppStorePayload | null = null;

export function buildAppStoreData(): AppStorePayload {
  if (cached) return cached;

  const apps: RawApp[] = (appStoreData as any).apps ?? [];

  // category -> apps（按 recommend 排序后取前 9）
  const categoryMap = new Map<string, RawApp[]>();
  for (const app of apps) {
    for (const tag of app.additionalProperties?.tags ?? []) {
      if (!categoryMap.has(tag)) categoryMap.set(tag, []);
      categoryMap.get(tag)!.push(app);
    }
  }

  const tagSortMap = new Map<string, number>();
  const rootTags = (appStoreData as any).additionalProperties?.tags;
  if (Array.isArray(rootTags)) {
    for (const t of rootTags) {
      if (t?.key != null && typeof t.sort === 'number') tagSortMap.set(t.key, t.sort);
    }
  }

  const sortedCategories = Array.from(categoryMap.entries())
    .map(([key, list]) => ({ key, apps: [...list].sort(byRecommend).slice(0, 9), sort: tagSortMap.get(key) ?? 9999 }))
    .filter(c => c.apps.length > 0)
    .sort((a, b) => a.sort - b.sort);

  // 去重后的精简应用列表（只保留渲染卡片必需的字段）
  const slimApps: SlimApp[] = [];
  const indexByName = new Map<string, number>();
  for (const app of apps) {
    if (indexByName.has(app.name)) continue;
    indexByName.set(app.name, slimApps.length);
    slimApps.push({
      n: app.name,
      i: app.icon || '',
      k: app.additionalProperties?.key ?? '',
      d: getAppDescription(app),
      t: (app.additionalProperties?.tags ?? []).slice(0, 2)
    });
  }

  const allCategoryApps = [...apps].sort(byRecommend).slice(0, 9);
  const categories: CategoryPayload[] = [
    { key: 'all', apps: allCategoryApps.map(a => indexByName.get(a.name) ?? -1).filter(i => i >= 0), total: apps.length },
    ...sortedCategories.map(c => ({
      key: c.key,
      apps: c.apps.map(a => indexByName.get(a.name) ?? -1).filter(i => i >= 0),
      total: categoryMap.get(c.key)?.length ?? c.apps.length
    }))
  ];

  cached = { apps: slimApps, categories };
  return cached;
}
