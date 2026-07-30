export type StructuredData = Record<string, unknown>;

export const SITE_URL = "https://1panel.pro";
export const SITE_NAME = "1Panel";
export const ORGANIZATION_NAME = "FIT2CLOUD";
export const ORGANIZATION_ALTERNATE_NAME = "FIT2CLOUD";
export const ORGANIZATION_URL = "https://www.fit2cloud.com/";
export const GITHUB_URL = "https://github.com/1Panel-dev/1Panel";
export const DEFAULT_DESCRIPTION =
  "1Panel is a modern open-source VPS control panel — deploy Ollama, run local LLMs, manage MCP servers, and monitor GPUs. One-click WordPress, Docker, SSL. Free forever.";
export const DEFAULT_KEYWORDS = [
  "1Panel",
  "Linux panel",
  "server management",
  "open source panel",
  "Docker management",
  "container management",
  "website deployment",
  "database management",
  "app store",
  "AI model management",
  "AI Portal",
  "AI Gateway",
  "API Key management",
  "local AI deployment",
  "AI appliance",
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
    name: SITE_NAME,
    alternateName: SITE_NAME,
    url: `${resolvedSiteUrl}/`,
    inLanguage: "en",
    description: DEFAULT_DESCRIPTION,
    publisher: {
      "@id": `${resolvedSiteUrl}/#organization`,
    },
  };
}

export function createBreadcrumbSchema(
  items: { name: string; url: string }[],
  siteUrl: string = SITE_URL,
  basePath: string = DEFAULT_BASE_PATH
): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.url, siteUrl, basePath),
    })),
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
    inLanguage: "en",
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
  const imageUrl = image ? toAbsoluteUrl(image, siteUrl, basePath) : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    url,
    headline: title,
    description,
    ...(imageUrl ? { image: imageUrl } : {}),
    datePublished,
    dateModified,
    ...(keywords ? { keywords: keywords.join(",") } : {}),
    ...(articleSection ? { articleSection } : {}),
    ...(wordCount ? { wordCount } : {}),
    inLanguage: "en",
    isPartOf: {
      "@id": `${toAbsoluteUrl("/", siteUrl, basePath).replace(/\/$/, "")}/#website`,
    },
    publisher: {
      "@id": `${toAbsoluteUrl("/", siteUrl, basePath).replace(/\/$/, "")}/#organization`,
    },
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
