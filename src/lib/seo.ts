export type StructuredData = Record<string, unknown>;

export const SITE_URL = "https://1panel.cn";
export const SITE_NAME = "1Panel";
export const ORGANIZATION_NAME = "杭州飞致云信息科技有限公司";
export const ORGANIZATION_ALTERNATE_NAME = "FIT2CLOUD 飞致云";
export const ORGANIZATION_URL = "https://www.fit2cloud.com/";
export const GITHUB_URL = "https://github.com/1Panel-dev/1Panel";
export const DEFAULT_DESCRIPTION =
  "1Panel 是现代化、开源的 Linux 服务器运维管理面板，提供网站、数据库、容器、文件、备份、安全与 AI 管理能力，支持应用商店一键部署。";
export const DEFAULT_KEYWORDS = [
  "1Panel",
  "1Panel 官网",
  "Linux 面板",
  "Linux 服务器管理",
  "Linux 服务器运维管理面板",
  "开源面板",
  "开源 Linux 面板",
  "服务器运维",
  "Docker 管理",
  "容器管理",
  "网站部署",
  "数据库管理",
  "应用商店",
  "AI 模型管理",
  "AI 门户",
  "API Key 管理",
  "本地 AI 部署",
  "私有化 AI 部署",
  "AI 一体机",
  "AI 助理一体机",
  "AI 编程一体机",
];
export const DEFAULT_OG_IMAGE = "/images/overview-full.png";
const DEFAULT_BASE_PATH = import.meta.env.BASE_URL ?? "/";

function normalizeSiteUrl(siteUrl: string = SITE_URL) {
  return new URL("/", siteUrl).toString().replace(/\/$/, "");
}

function normalizeBasePath(basePath: string = DEFAULT_BASE_PATH) {
  if (basePath === "." || basePath === "./" || basePath === "/") {
    return "/";
  }

  return `/${basePath.replace(/^\/+|\/+$/g, "")}/`;
}

export function withBasePath(path: string, basePath: string = DEFAULT_BASE_PATH) {
  if (/^(?:[a-z][a-z\d+.-]*:|#)/i.test(path)) {
    return path;
  }

  return `${normalizeBasePath(basePath)}${path.replace(/^\/+/, "")}`;
}

export function toAbsoluteUrl(
  path: string,
  siteUrl: string = SITE_URL,
  basePath: string = DEFAULT_BASE_PATH
) {
  if (/^[a-z][a-z\d+.-]*:/i.test(path)) {
    return new URL(path).toString();
  }

  return new URL(
    withBasePath(path, basePath),
    normalizeSiteUrl(siteUrl)
  ).toString();
}

export function createOrganizationSchema(
  siteUrl: string = SITE_URL,
  basePath: string = DEFAULT_BASE_PATH
): StructuredData {
  const resolvedSiteUrl = toAbsoluteUrl("/", siteUrl, basePath).replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${resolvedSiteUrl}/#organization`,
    name: ORGANIZATION_NAME,
    alternateName: ORGANIZATION_ALTERNATE_NAME,
    url: ORGANIZATION_URL,
    logo: toAbsoluteUrl("/images/logo-light-FIT2CLOUD.svg", siteUrl, basePath),
    sameAs: [ORGANIZATION_URL, GITHUB_URL],
  };
}

export function createWebsiteSchema(
  siteUrl: string = SITE_URL,
  basePath: string = DEFAULT_BASE_PATH
): StructuredData {
  const resolvedSiteUrl = toAbsoluteUrl("/", siteUrl, basePath).replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${resolvedSiteUrl}/#website`,
    name: `${SITE_NAME} 官网`,
    alternateName: SITE_NAME,
    url: `${resolvedSiteUrl}/`,
    inLanguage: "zh-CN",
    description: DEFAULT_DESCRIPTION,
    publisher: {
      "@id": `${resolvedSiteUrl}/#organization`,
    },
  };
}

export function createWebPageSchema({
  title,
  description,
  url,
  image,
  imageAlt,
  keywords,
  datePublished,
  dateModified,
  siteUrl = SITE_URL,
  basePath = DEFAULT_BASE_PATH,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[] | string;
  datePublished?: string;
  dateModified?: string;
  siteUrl?: string;
  basePath?: string;
}): StructuredData {
  const resolvedSiteUrl = toAbsoluteUrl("/", siteUrl, basePath).replace(/\/$/, "");
  const imageUrl = image ? toAbsoluteUrl(image, siteUrl, basePath) : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    ...(keywords
      ? { keywords: Array.isArray(keywords) ? keywords.join(",") : keywords }
      : {}),
    inLanguage: "zh-CN",
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(imageUrl
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: imageUrl,
            caption: imageAlt ?? title,
          },
        }
      : {}),
    isPartOf: {
      "@id": `${resolvedSiteUrl}/#website`,
    },
    about: {
      "@type": "Thing",
      name: SITE_NAME,
    },
    publisher: {
      "@id": `${resolvedSiteUrl}/#organization`,
    },
  };
}

export function createBlogPostingSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  keywords,
  articleSection,
  wordCount,
  siteUrl = SITE_URL,
  basePath = DEFAULT_BASE_PATH,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  keywords?: string[];
  articleSection?: string;
  wordCount?: number;
  siteUrl?: string;
  basePath?: string;
}): StructuredData {
  const resolvedSiteUrl = toAbsoluteUrl("/", siteUrl, basePath).replace(/\/$/, "");
  const imageUrl = image ? toAbsoluteUrl(image, siteUrl, basePath) : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    inLanguage: "zh-CN",
    datePublished,
    dateModified,
    ...(keywords?.length
      ? {
          keywords: keywords.join(","),
        }
      : {}),
    ...(articleSection ? { articleSection } : {}),
    ...(wordCount ? { wordCount } : {}),
    ...(imageUrl
      ? {
          image: [imageUrl],
        }
      : {}),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    author: {
      "@id": `${resolvedSiteUrl}/#organization`,
    },
    publisher: {
      "@id": `${resolvedSiteUrl}/#organization`,
    },
    isPartOf: {
      "@id": `${resolvedSiteUrl}/blog.html#blog`,
    },
    about: {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      url: `${resolvedSiteUrl}/`,
    },
  };
}

export function createBlogSchema({
  name,
  description,
  url,
  posts,
  dateModified,
  siteUrl = SITE_URL,
  basePath = DEFAULT_BASE_PATH,
}: {
  name: string;
  description: string;
  url: string;
  posts: Array<{ title: string; url: string; date: string; description?: string }>;
  dateModified: string;
  siteUrl?: string;
  basePath?: string;
}): StructuredData {
  const resolvedSiteUrl = toAbsoluteUrl("/", siteUrl, basePath).replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${resolvedSiteUrl}/blog.html#blog`,
    name,
    description,
    url,
    inLanguage: "zh-CN",
    dateModified,
    publisher: {
      "@id": `${resolvedSiteUrl}/#organization`,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: post.url,
      datePublished: post.date,
      dateModified: post.date,
      ...(post.description ? { description: post.description } : {}),
    })),
  };
}

export function createItemListSchema({
  name,
  description,
  url,
  items,
  siteUrl = SITE_URL,
  basePath = DEFAULT_BASE_PATH,
}: {
  name: string;
  description: string;
  url: string;
  items: Array<{ title: string; url: string; date?: string; description?: string }>;
  siteUrl?: string;
  basePath?: string;
}): StructuredData {
  const resolvedSiteUrl = toAbsoluteUrl("/", siteUrl, basePath).replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#itemlist`,
    name,
    description,
    url,
    inLanguage: "zh-CN",
    isPartOf: {
      "@id": `${resolvedSiteUrl}/blog.html#blog`,
    },
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: item.url,
      item: {
        "@type": "BlogPosting",
        headline: item.title,
        url: item.url,
        ...(item.date ? { datePublished: item.date, dateModified: item.date } : {}),
        ...(item.description ? { description: item.description } : {}),
      },
    })),
  };
}

export function createFAQPageSchema({
  url,
  items,
}: {
  url: string;
  items: Array<{ question: string; answer: string }>;
}): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createSoftwareApplicationSchema(
  siteUrl: string = SITE_URL,
  basePath: string = DEFAULT_BASE_PATH
): StructuredData {
  const resolvedSiteUrl = toAbsoluteUrl("/", siteUrl, basePath).replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${resolvedSiteUrl}/#software`,
    name: SITE_NAME,
    url: `${resolvedSiteUrl}/`,
    description: DEFAULT_DESCRIPTION,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux",
    image: toAbsoluteUrl(DEFAULT_OG_IMAGE, siteUrl, basePath),
    screenshot: toAbsoluteUrl("/images/dashboard-preview.png", siteUrl, basePath),
    downloadUrl: GITHUB_URL,
    softwareHelp: toAbsoluteUrl("/docs", siteUrl, basePath),
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CNY",
    },
    publisher: {
      "@id": `${resolvedSiteUrl}/#organization`,
    },
    sameAs: [GITHUB_URL],
    featureList: [
      "Linux 服务器图形化管理",
      "应用商店一键部署",
      "网站与域名管理",
      "数据库管理",
      "容器与文件管理",
      "备份与恢复",
      "安全防护",
      "本地 AI 模型与智能体管理",
      "OpenClaw 智能体管理",
      "GPU 监控",
      "AI 门户",
      "AI 助理一体机",
      "AI 编程一体机",
      "纯内网 AI 部署",
    ],
  };
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
