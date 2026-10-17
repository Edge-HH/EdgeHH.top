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
    /** 关联项目（填 src/content/projects 下的文件名），文章会出现在该项目页的「更新日志」里 */
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
      tagline: z.string(),
      summary: z.string(),
      accent: z.string(),
      /** 强调色按钮上的文字颜色 */
      accentInk: z.string().default('#ffffff'),
      icon: image().optional(),
      /** tile：图标放在白色圆角底板上；full：图标自带底色，直接裁成圆角 */
      iconStyle: z.enum(['tile', 'full']).default('full'),
      repo: z.string().url(),
      links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
      platforms: z.array(z.string()),
      stack: z.array(z.string()),
      license: z.string(),
      version: z.string().optional(),
      stats: z
        .array(z.object({ value: z.string(), unit: z.string().optional(), label: z.string() }))
        .default([]),
      /** 首页滚动展示时依次出现的说明 */
      steps: z.array(z.object({ title: z.string(), desc: z.string() })).max(5).default([]),
      highlights: z
        .array(
          z.object({
            icon: z.string(),
            title: z.string(),
            desc: z.string(),
            wide: z.boolean().default(false)
          })
        )
        .default([]),
      gallery: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
        .default([])
    })
});

export const collections = { posts, projects };
