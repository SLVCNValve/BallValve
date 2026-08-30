import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const base = process.env.BASE_PATH
  ? `${process.env.BASE_PATH.replace(/\/$/, '')}/`
  : '/';

export default defineConfig({
  site: 'https://example.github.io',
  base,
  output: 'static',
  integrations: [sitemap()],
});
