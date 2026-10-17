import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** 关联项目（填 src/content/projects 下的文件名），文章会列在该项目页底部 */
    project: reference('projects').optional(),
    draft: z.boolean().default(false),
    comments: z.boolean().default(true)
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      order: z.number(),
      /** 一句话说明：首页列表、页面描述和分享卡片 */
      summary: z.string(),
      /** 项目页开头的介绍段落 */
      intro: z.string(),
      /** 只用于图标底色和小标记 */
      accent: z.string(),
      icon: image().optional(),
      /** tile：图标放在白色底板上；full：图标自带底色 */
      iconStyle: z.enum(['tile', 'full']).default('full'),
      /** 最新发布版本 */
      version: z.string(),
      released: z.coerce.date(),
      prerelease: z.boolean().default(false),
      download: z.string().url(),
      docs: z.string().url().optional(),
      repo: z.string().url(),
      platforms: z.array(z.string()),
      stack: z.array(z.string()),
      license: z.string(),
      /** 显示在项目页开头的提示，例如开发分支上还有未发布的功能 */
      notice: z.string().optional(),
      screenshots: z
        .array(
          z.object({
            src: image(),
            /** 同一画面的深色版本，网站切到深色时显示 */
            dark: image().optional(),
            alt: z.string(),
            caption: z.string(),
            /** 截图对应的版本或构建 */
            build: z.string(),
            /** wide：电脑画面；phone：手机竖屏；watch：手表 */
            kind: z.enum(['wide', 'phone', 'watch']).default('wide'),
            /** 首页用这张图代表项目 */
            cover: z.boolean().default(false)
          })
        )
        .default([]),
      releases: z
        .array(
          z.object({
            version: z.string(),
            date: z.coerce.date(),
            prerelease: z.boolean().default(false),
            notes: z.array(z.string()).default([])
          })
        )
        .default([])
    })
});

export const collections = { posts, projects };
