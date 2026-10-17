# EdgeHH.top

EdgeHH 的项目站：RemoteCI、Pancake、ClipPort 的功能说明、截图、下载地址，以及更新日志和开发笔记。文章评论基于 giscus（GitHub Discussions）。

基于 [Astro](https://astro.build)，没有前端框架和动画库；页面只用到很少的脚本（深浅色切换、截图大图、目录高亮、文章标签筛选）。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
npm run preview  # 预览构建结果
```

## 页面结构

| 地址 | 内容 |
| --- | --- |
| `/` | 简短介绍、三个项目（每个一张代表截图）、最近文章 |
| `/projects/<项目>/` | 版本与下载、截图、完整功能说明、版本记录、相关文章 |
| `/posts/` | 全部文章，可按标签筛选 |
| `/posts/<文章>/` | 文章正文与评论 |

## 修改项目

每个项目是 `src/content/projects/` 下的一个 Markdown 文件，字段说明见 `src/content.config.ts`：

- frontmatter：名称、一句话说明（`summary`）、介绍段落（`intro`）、最新版本与发布日期、下载/文档/仓库地址、平台、技术栈、截图、版本记录（`releases`）。
- 正文：功能说明。每个 `##` 标题是一个章节，会自动编号并出现在项目页左侧目录里。

发布新版本时，更新 `version`、`released`，在 `releases` 最前面加一条，并补充正文里新增的功能。

### 截图

截图放在 `src/assets/projects/<项目>/shots/`，建议用 WebP（质量 90 左右）。每张截图在 frontmatter 里写一条：

```yaml
screenshots:
  - src: ../../assets/projects/remoteci/shots/schedule-light.webp
    dark: ../../assets/projects/remoteci/shots/schedule-dark.webp  # 可选，网站切到深色时显示
    alt: 给读屏软件的描述
    caption: 图注
    build: WebUI 3.3.1.5     # 截图对应的版本，显示在图注后面
    kind: wide               # wide / phone / watch
    cover: true              # 可选，首页用这张图代表项目
```

请只用软件真实运行的截图，并在 `build` 里写清版本。构建时 Astro 会自动生成多种尺寸，点击截图会打开原尺寸大图。

## 写文章

在 `src/content/posts/` 新建 Markdown 文件，文件名就是网址，例如 `pancake-2-2.md` → `/posts/pancake-2-2/`。

```markdown
---
title: Pancake 2.2 更新日志
description: 一句话摘要，显示在列表和分享卡片里
date: 2026-10-20
tags: [更新日志]
project: pancake   # 可选，关联后会列在该项目页的「相关文章」里
draft: false       # 可选，true 时只在本地开发时可见
comments: true     # 可选，false 关闭本文评论
---

正文……
```

文件名以 `_` 开头的文件不会被发布。

## 评论（giscus）

1. 在 GitHub 仓库 **Settings → General → Features** 勾选 **Discussions**。
2. 安装 [giscus App](https://github.com/apps/giscus) 并授权给本仓库。
3. 打开 [giscus.app/zh-CN](https://giscus.app/zh-CN)，填入 `Edge-HH/EdgeHH.top`，分类选 **Announcements**，复制页面生成的 `data-category-id`。
4. 填到 `src/site.config.ts` 的 `giscus.categoryId`，重新构建即可。

## 其他配置

`src/site.config.ts` 里可以修改站点名、描述、GitHub 地址和 ICP 备案号（填写后显示在页脚）。

## 部署

`esa.jsonc` 已配置为阿里云 ESA Pages：执行 `npm run build`，发布 `dist/` 目录，404 使用 `dist/404.html`。

推送到 `main`、向 `main` 打开 Pull Request，或在 Actions 里手动运行时，`.github/workflows/build.yml` 会用 Node.js 22 执行 `npm ci` 和 `npm run build`，并把生成的 `dist/` 作为 artifact 上传。
