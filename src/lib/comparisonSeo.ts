import { SITE_URL } from './seo'

export interface ComparisonSeoConfig {
  title: string
  description: string
  keywords: string[]
  canonical: string
  image: string
  imageAlt: string
  ogType: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  structuredData: Array<Record<string, unknown>>
}

const PUBLISHED_DATE = '2026-04-02'

const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString()

const baotaDescription =
  '全面对比 1Panel 与传统面板在开源程度、容器化部署、应用商店、安全隔离、备份恢复和用户体验上的差异，覆盖宝塔面板等传统方案的常见问题，帮助你选择更适合生产环境的 Linux 服务器运维管理面板。'

const baotaFaqItems = [
  {
    question: '1Panel 与传统面板的主要区别是什么？',
    answer:
      '1Panel 更强调开源透明、容器化部署、环境隔离与现代化体验；传统面板例如宝塔面板这类方案，更偏传统服务器面板模式，安装方式和插件生态更接近传统运维路径。',
  },
  {
    question: '1Panel 是否适合作为传统面板替代方案？',
    answer:
      '如果你更看重开源 Linux 面板、Docker 化运维、一键部署、安全隔离和更现代的操作体验，1Panel 值得作为传统面板替代方案优先评估，尤其适合正在评估宝塔面板替代方案的用户。',
  },
  {
    question: '1Panel 是否开源免费？',
    answer:
      '是。1Panel 提供开源代码，适合希望获得更高透明度和可审计能力的开发者与运维团队。',
  },
  {
    question: '为什么 1Panel 更适合容器化运维场景？',
    answer:
      '1Panel 通过容器化部署让应用、数据库和运行环境更容易隔离，降低依赖冲突、迁移复杂度和生产环境维护成本。',
  },
  {
    question: '哪些用户适合选择 1Panel？',
    answer:
      '适合需要现代化 Linux 服务器运维管理面板、Docker 应用管理、自动化备份和更轻量运维体验的个人站长、开发者与中小团队。',
  },
]

const baotaCanonical = '/vsbt.html'
const baotaImage = '/images/comparisons/baota/server-dashboard.png'

export const baotaSeo: ComparisonSeoConfig = {
  title: '1Panel VS 传统面板',
  description: baotaDescription,
  keywords: [
    '1Panel VS 传统面板',
    '1Panel 对比传统面板',
    '传统面板替代方案',
    '1Panel vs 宝塔面板',
    '1Panel 和 宝塔面板对比',
    '宝塔面板替代方案',
    '宝塔替代方案',
    '开源 Linux 面板',
    'Linux 服务器管理面板',
    '服务器运维管理面板',
    'Docker 面板',
    '1Panel 评测',
    '面板对比',
    '开源服务器面板',
  ],
  canonical: baotaCanonical,
  image: baotaImage,
  imageAlt: '1Panel 与传统面板对比页面',
  ogType: 'article',
  modifiedTime: PUBLISHED_DATE,
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '1Panel',
      applicationCategory: 'SystemSoftwareApplication',
      operatingSystem: 'Linux',
      url: 'https://1panel.cn/',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'CNY',
      },
      description: '现代化、开源的 Linux 服务器运维管理面板。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: '1Panel VS 传统面板',
      description: baotaDescription,
      url: absoluteUrl(baotaCanonical),
      inLanguage: 'zh-CN',
      isAccessibleForFree: true,
      dateModified: PUBLISHED_DATE,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': absoluteUrl(baotaCanonical),
      },
      about: [
        {
          '@type': 'SoftwareApplication',
          name: '1Panel',
          applicationCategory: 'SystemSoftwareApplication',
        },
        {
          '@type': 'SoftwareApplication',
          name: '宝塔面板',
          alternateName: '传统面板',
          url: 'https://www.bt.cn/',
          applicationCategory: 'SystemSoftwareApplication',
        },
      ],
      publisher: {
        '@id': 'https://1panel.cn/#organization',
      },
      keywords: [
        '1Panel VS 传统面板',
        '传统面板替代方案',
        '1Panel vs 宝塔面板',
        '宝塔面板替代方案',
        '开源 Linux 面板',
        '服务器运维管理面板',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '1Panel 与传统面板对比维度',
      itemListElement: [
        '开源程度',
        '容器化部署',
        '应用商店',
        '安全隔离',
        '备份恢复',
        '用户体验',
      ].map((name, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: baotaFaqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
}

const cpanelBase = '/vscpanel.html'
const cpanelImage = '/images/comparisons/cpanel/server-dashboard.png'

const cpanelRouteMeta = {
  home: {
    title: '1Panel VS cPanel',
    description:
      '1Panel VS cPanel 对比分析，覆盖功能能力、成本差异、Docker 支持与 Linux 服务器管理体验，帮助你判断 cPanel 替代方案是否适合当前业务。',
    keywords: [
      '1Panel VS cPanel',
      '1Panel vs cPanel',
      'cPanel 替代方案',
      'Linux 服务器管理面板',
      '服务器控制面板对比',
      '开源服务器面板',
      'Docker 面板',
      '主机管理面板',
    ],
    canonical: cpanelBase,
    pageName: '首页',
    ogType: 'website' as const,
  },
  comparison: {
    title: '功能对比 | 1Panel VS cPanel',
    description:
      '查看 1Panel 与 cPanel 在文件管理、数据库、容器管理、网站部署、安全能力、监控能力与性能体验等方面的详细对比。',
    keywords: [
      '1Panel cPanel 功能对比',
      '1Panel 和 cPanel 对比',
      'cPanel alternative',
      'Linux hosting panel comparison',
      'Docker 管理面板对比',
      '服务器面板功能对比',
    ],
    canonical: '/vscpanel/comparison.html',
    pageName: '功能对比',
    ogType: 'article' as const,
  },
  cost: {
    title: '成本分析 | 1Panel VS cPanel',
    description:
      '查看 1Panel 与 cPanel 的授权费用、5 年总拥有成本和不同业务场景下的预算差异，评估 cPanel 替代方案的成本收益。',
    keywords: [
      '1Panel cPanel 成本对比',
      'cPanel 价格',
      'cPanel 成本分析',
      '服务器面板 TCO',
      '开源面板 vs 商业面板',
      'cPanel 替代品价格',
    ],
    canonical: '/vscpanel/cost.html',
    pageName: '成本分析',
    ogType: 'article' as const,
  },
}

export type CPanelSeoPage = keyof typeof cpanelRouteMeta

export function getCpanelSeo(page: CPanelSeoPage): ComparisonSeoConfig {
  const meta = cpanelRouteMeta[page]
  const canonicalUrl = absoluteUrl(meta.canonical)
  const graph: Array<Record<string, unknown>> = [
    {
      '@type': 'WebSite',
      '@id': `${absoluteUrl(cpanelBase)}#website`,
      name: '1Panel VS cPanel',
      url: absoluteUrl(cpanelBase),
      inLanguage: 'zh-CN',
      publisher: {
        '@id': 'https://1panel.cn/#organization',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${absoluteUrl(cpanelBase)}#software`,
      name: '1Panel',
      applicationCategory: 'Server Management Panel',
      operatingSystem: 'Linux',
      url: 'https://1panel.cn/',
      image: absoluteUrl('/images/comparisons/cpanel/1panel-logo.png'),
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@type': page === 'home' ? 'CollectionPage' : 'WebPage',
      '@id': `${canonicalUrl}#comparison-page`,
      url: canonicalUrl,
      name: meta.title,
      description: meta.description,
      inLanguage: 'zh-CN',
      isPartOf: {
        '@id': `${absoluteUrl(cpanelBase)}#website`,
      },
      about: [
        {
          '@type': 'SoftwareApplication',
          name: '1Panel',
          url: 'https://1panel.cn/',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'cPanel',
          url: 'https://www.cpanel.net/',
        },
      ],
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: absoluteUrl(cpanelImage),
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '首页',
          item: absoluteUrl(cpanelBase),
        },
        ...(page === 'home'
          ? []
          : [
              {
                '@type': 'ListItem',
                position: 2,
                name: meta.pageName,
                item: canonicalUrl,
              },
            ]),
      ],
    },
  ]

  if (page !== 'home') {
    graph.push({
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      headline: meta.title,
      description: meta.description,
      author: {
        '@id': 'https://1panel.cn/#organization',
      },
      publisher: {
        '@id': 'https://1panel.cn/#organization',
      },
      mainEntityOfPage: {
        '@id': `${canonicalUrl}#webpage`,
      },
      datePublished: PUBLISHED_DATE,
      dateModified: PUBLISHED_DATE,
      image: absoluteUrl(cpanelImage),
      about: [
        {
          '@type': 'SoftwareApplication',
          name: '1Panel',
          url: 'https://1panel.cn/',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'cPanel',
          url: 'https://www.cpanel.net/',
        },
      ],
    })
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    canonical: meta.canonical,
    image: cpanelImage,
    imageAlt: meta.title,
    ogType: meta.ogType,
    ...(page === 'home'
      ? {}
      : {
          publishedTime: PUBLISHED_DATE,
          modifiedTime: PUBLISHED_DATE,
        }),
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@graph': graph,
      },
    ],
  }
}

const webminCanonical = '/vswebmin.html'
const webminImage = '/images/comparisons/webmin/hero-dashboard.png'
const webminDescription =
  '1Panel VS Webmin 对比分析，聚焦 Linux 服务器管理、Docker 容器支持、系统运维效率、用户体验与开源替代方案，帮助你判断 Webmin 是否适合当前业务。'

export const webminSeo: ComparisonSeoConfig = {
  title: '1Panel VS Webmin',
  description: webminDescription,
  keywords: [
    '1Panel VS Webmin',
    '1Panel vs Webmin',
    'Webmin 替代方案',
    'Linux 服务器管理工具',
    '服务器管理面板对比',
    '开源服务器面板',
    '现代化运维面板',
    'Webmin 对比',
  ],
  canonical: webminCanonical,
  image: webminImage,
  imageAlt: '1Panel VS Webmin',
  ogType: 'website',
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          '@id': `${absoluteUrl(webminCanonical)}#1panel`,
          name: '1Panel',
          applicationCategory: 'Server Management Panel',
          operatingSystem: 'Linux',
          url: 'https://1panel.cn/',
          image: absoluteUrl('/images/comparisons/webmin/1panel-logo.png'),
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        },
        {
          '@type': 'SoftwareApplication',
          '@id': `${absoluteUrl(webminCanonical)}#webmin`,
          name: 'Webmin',
          applicationCategory: 'Server Management Tool',
          operatingSystem: 'Linux',
          url: 'https://webmin.com/',
        },
        {
          '@type': 'WebPage',
          '@id': `${absoluteUrl(webminCanonical)}#comparison-page`,
          url: absoluteUrl(webminCanonical),
          name: '1Panel VS Webmin',
          description: webminDescription,
          inLanguage: 'zh-CN',
          about: [
            {
              '@id': `${absoluteUrl(webminCanonical)}#1panel`,
            },
            {
              '@id': `${absoluteUrl(webminCanonical)}#webmin`,
            },
          ],
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: absoluteUrl(webminImage),
          },
        },
      ],
    },
  ],
}
