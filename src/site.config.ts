export const site = {
  name: 'EdgeHH',
  tagline: '把想法，做成趁手的工具',
  description: 'EdgeHH 的项目与文章：RemoteCI、Pancake、ClipPort，以及更新日志和开发笔记。',
  github: 'https://github.com/Edge-HH',
  /** ICP 备案号，留空则页脚不显示 */
  icp: ''
};

export const nav = [
  { label: '项目', href: '/#projects' },
  { label: '文章', href: '/posts/' }
];

/**
 * giscus 评论（基于 GitHub Discussions）
 *
 * 1. 仓库 Settings → General → Features 勾选 Discussions
 * 2. 安装 giscus App：https://github.com/apps/giscus ，授权给本仓库
 * 3. 打开 https://giscus.app/zh-CN ，填入仓库与分类，把生成的 data-category-id 填到 categoryId
 *
 * repoId 与 categoryId 都填好后，文章页底部才会出现评论区。
 */
export const giscus = {
  repo: 'Edge-HH/EdgeHH.top',
  repoId: 'R_kgDOVEVvXw',
  category: 'Announcements',
  categoryId: 'DIC_kwDOVEVvX84DItwZ',
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  lang: 'zh-CN'
};
