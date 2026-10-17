import type { APIRoute } from 'astro';
import { getPosts } from '../lib/content';
import { site } from '../site.config';

const escapes: Record<string, string> = { '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' };
const esc = (s: string) => s.replace(/[<>&'"]/g, (c) => escapes[c]);

export const GET: APIRoute = async ({ site: base }) => {
  const origin = base ?? new URL('https://edgehh.top');
  const posts = await getPosts();

  const items = posts
    .map((post) => {
      const url = new URL(`/posts/${post.id}/`, origin).href;
      const parts = [
        `<title>${esc(post.data.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        `<pubDate>${post.data.date.toUTCString()}</pubDate>`,
        post.data.description ? `<description>${esc(post.data.description)}</description>` : '',
        ...post.data.tags.map((tag) => `<category>${esc(tag)}</category>`)
      ];
      return `<item>${parts.join('')}</item>`;
    })
    .join('');

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<rss version="2.0"><channel>' +
    `<title>${esc(site.name)}</title>` +
    `<link>${origin.href}</link>` +
    `<description>${esc(site.description)}</description>` +
    '<language>zh-CN</language>' +
    items +
    '</channel></rss>';

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
