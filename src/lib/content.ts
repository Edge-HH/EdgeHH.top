import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;
export type Project = CollectionEntry<'projects'>;

/** 按日期倒序；生产环境不包含草稿 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

// frontmatter 里的日期按 UTC 零点解析，格式化时也用 UTC，避免时区导致日期偏移一天
const longDate = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC'
});

export function formatDate(date: Date): string {
  return longDate.format(date);
}

/** 2026-10-15 */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** 中文按每分钟约 400 字、英文按每分钟约 200 词估算 */
export function readingMinutes(body = ''): number {
  const text = body.replace(/```[\s\S]*?```/g, '').replace(/<[^>]+>/g, '');
  const cjk = (text.match(/[㐀-鿿豈-﫿]/g) ?? []).length;
  const words = (text.replace(/[㐀-鿿豈-﫿]/g, ' ').match(/[A-Za-z0-9]+/g) ?? []).length;
  return Math.max(1, Math.round(cjk / 400 + words / 200));
}
