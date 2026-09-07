# Mobius Agentic

一个基于 Astro 的纯静态 Agentic 资源库，用来长期整理 Skills、Prompts、工作流和 Taste。项目不依赖数据库或后台，构建产物可以部署到 Cloudflare Pages、Vercel、Netlify、GitHub Pages 等静态托管平台。

## 本地开发

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

构建结果位于 `dist/`。

## 增加内容

四类内容分别放在：

- `src/content/skills/`
- `src/content/prompts/`
- `src/content/workflows/`
- `src/content/taste/`

复制同类目录中的任意 Markdown 文件，修改文件名、头部字段和正文即可。文件名会成为 URL，例如 `src/content/prompts/my-prompt.md` 对应 `/prompts/my-prompt`。

```yaml
---
title: 标题
description: 一句话介绍
category: 分类
tags: [标签一, 标签二]
author: Mobius
featured: false
updatedAt: 2026-09-07
source: https://example.com # 可选，转载内容建议填写
---

这里开始写 Markdown 正文。
```

保存后，首页、分类页、搜索和详情页都会自动更新。`featured: true` 会在卡片上显示“精选”。

## 部署

静态托管平台的通用配置：

- 构建命令：`npm run build`
- 发布目录：`dist`
- Node.js：20 或更高版本

部署完成后，把博客导航栏里的 `Agentic` 链接指向该站点域名即可。

拿到正式域名后，建议在 `astro.config.mjs` 中加入 `site: 'https://你的域名'`，Astro 会据此生成正确的 canonical 地址。
