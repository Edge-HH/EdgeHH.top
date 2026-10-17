import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://edgehh.top',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' }
    }
  }
});
