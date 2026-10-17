export const site = {
  name: 'EdgeHH',
  description: 'EdgeHH 的开源项目：RemoteCI、Pancake 与 ClipPort 的功能说明、截图、下载和更新日志。',
  github: 'https://github.com/Edge-HH',
  /** ICP 备案号，留空则页脚不显示 */
  icp: ''
};

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
