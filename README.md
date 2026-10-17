# EdgeHH.top

个人项目展示站：首页滚动展示 RemoteCI、Pancake、ClipPort，另有文章（更新日志、开发笔记），文章评论基于 giscus（GitHub Discussions）。

基于 [Astro](https://astro.build)，平滑滚动使用 [Lenis](https://github.com/darkroomengineering/lenis)。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
npm run preview  # 预览构建结果
```

## 写文章

在 `src/content/posts/` 新建 Markdown 文件，文件名就是网址，例如 `pancake-2-2.md` → `/posts/pancake-2-2/`。

```markdown
---
title: Pancake 2.2 更新日志
description: 一句话摘要，显示在列表和分享卡片里
date: 2026-10-20
tags: [更新日志]
project: pancake   # 可选，关联后会出现在该项目页的「更新日志」里
draft: false       # 可选，true 时只在本地开发时可见
comments: true     # 可选，false 关闭本文评论
---

正文……
```

文件名以 `_` 开头的文件不会被发布。

## 修改或添加项目

每个项目是 `src/content/projects/` 下的一个 Markdown 文件：frontmatter 里是名称、标语、强调色、亮点、规格等，正文会显示在项目页的介绍部分。字段说明见 `src/content.config.ts`。

首页和项目页上的界面样机在 `src/components/mockups/`，用 HTML/CSS 绘制，随滚动分三段切换状态。新增项目如果没有专属样机，会自动用项目图标代替。

## 开启评论（giscus）

1. 在 GitHub 仓库 **Settings → General → Features** 勾选 **Discussions**。
2. 安装 [giscus App](https://github.com/apps/giscus) 并授权给本仓库。
3. 打开 [giscus.app/zh-CN](https://giscus.app/zh-CN)，填入 `Edge-HH/EdgeHH.top`，分类选 **Announcements**，复制页面生成的 `data-category-id`。
4. 填到 `src/site.config.ts` 的 `giscus.categoryId`，重新构建即可。

`categoryId` 为空时文章页不显示评论区（本地开发时会显示一条配置提示）。

## 其他配置

`src/site.config.ts` 里还可以修改站点名、描述、导航和 ICP 备案号（填写后显示在页脚）。

## 部署

`esa.jsonc` 已配置为阿里云 ESA Pages：执行 `npm run build`，发布 `dist/` 目录，404 使用 `dist/404.html`。
