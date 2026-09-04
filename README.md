<p align="center">
  <a href="https://1panel.cn/">
    <img src="./public/images/logo-blue.png" alt="1Panel" width="260" />
  </a>
</p>

<p align="center">
  现代化、开源的 Linux 服务器运维管理面板
  <br />
  也是面向服务器、应用与 AI 场景的轻量级管理平台
</p>

<p align="center">
  <a href="https://1panel.cn/"><img src="https://img.shields.io/badge/官网-1Panel.cn-005EEB?style=flat-square" alt="1Panel 官网" /></a>
  <a href="https://1panel.cn/docs/"><img src="https://img.shields.io/badge/使用文档-在线阅读-005EEB?style=flat-square" alt="1Panel 使用文档" /></a>
  <a href="https://demo.1panel.cn/"><img src="https://img.shields.io/badge/在线体验-Demo-005EEB?style=flat-square" alt="1Panel 在线体验" /></a>
  <a href="https://github.com/1Panel-dev/1Panel"><img src="https://img.shields.io/badge/GitHub-1Panel-1F2937?style=flat-square&amp;logo=github" alt="1Panel GitHub" /></a>
</p>

## 关于项目

本仓库是 [1Panel 中文官网](https://1panel.cn/)的前端项目，基于 Astro 构建并以静态站点形式发布。

网站集中展示 1Panel 的产品能力、版本与企业版信息、AI 相关解决方案、应用生态、产品动态及对比内容，并提供文档、在线体验、社区论坛等入口。

<p align="center">
  <a href="https://1panel.cn/">
    <img src="./public/images/overview-full.png" alt="1Panel 产品界面" width="920" />
  </a>
</p>

## 技术栈

- [Astro 4](https://astro.build/)：页面构建与静态输出
- [React 18](https://react.dev/)：交互式页面组件
- [Tailwind CSS 3](https://tailwindcss.com/)：样式与响应式布局
- [Astro Icon](https://www.astroicon.dev/)：图标组件
- GitHub Actions：构建、发布与生产产物同步

## 本地开发

建议使用与 CI 一致的 Node.js 24 环境，并通过 pnpm 管理依赖。

```bash
# 安装依赖
pnpm install --frozen-lockfile

# 启动开发服务器
pnpm dev
```

启动后访问 [http://localhost:4321](http://localhost:4321)。开发服务器默认监听所有网络接口，端口为 `4321`。

> [!NOTE]
> 首页应用商店模块会在构建阶段读取 1Panel 应用商店的远程数据，本地开发和构建时请保持网络可用。

## 构建与预览

```bash
# 生成静态站点，产物输出到 dist/
pnpm build

# 本地预览构建结果
pnpm preview
```

站点默认以 `https://1panel.cn` 作为生产地址，并使用相对路径生成静态资源，方便部署到静态托管环境。

## 项目结构

```text
.
├── public/                 # 图片、站点地图、robots.txt 等静态资源
├── src/
│   ├── components/         # 页面组件与交互模块
│   ├── data/               # 产品动态等结构化数据
│   ├── layouts/            # 页面布局与通用 SEO 结构
│   ├── lib/                # SEO、博客和页面辅助逻辑
│   ├── pages/              # Astro 页面与路由
│   ├── scripts/            # 前端脚本
│   └── styles/             # 全局样式与专题页样式
├── astro.config.mjs        # Astro 与静态路由构建配置
├── tailwind.config.mjs     # Tailwind 主题配置
└── package.json            # 项目依赖与脚本
```

## 开发约定

- 优先复用 `src/components/` 中的公共页头、页脚、统计与布局组件，保持官网视觉和交互一致。
- 页面元信息、Canonical、Open Graph、Twitter Card 与 JSON-LD 统一通过布局及 `src/lib/seo.ts` 维护。
- 新增或调整公开页面时，同步检查 `public/sitemap.xml` 与 `public/llms.txt`。
- 提交前至少执行 `pnpm build`，并确认页面路由、静态资源和移动端布局正常。
- 不要提交 `dist/`、`node_modules/`、`.astro/` 或本地环境变量文件。

## 相关链接

- [1Panel 官网](https://1panel.cn/)
- [1Panel 使用文档](https://1panel.cn/docs/)
- [1Panel 在线体验](https://demo.1panel.cn/)
- [1Panel 应用商店](https://apps.fit2cloud.com/1panel)
- [1Panel GitHub](https://github.com/1Panel-dev/1Panel)
- [1Panel 社区论坛](https://bbs.fit2cloud.com/c/1p/)

## 参与贡献

欢迎通过 Issue 或 Pull Request 参与官网建设。提交变更时，请保持改动范围清晰，并在 Pull Request 中说明页面影响、验证方式及必要的截图。

<p align="center">
  Built with <a href="https://astro.build/">Astro</a> · Made by <a href="https://www.fit2cloud.com/">FIT2CLOUD 飞致云</a>
</p>
