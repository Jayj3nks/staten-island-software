import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config/site.ts';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.canonicalUrl,
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
