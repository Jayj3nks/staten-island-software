import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://statenislandsoftware.com',
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
