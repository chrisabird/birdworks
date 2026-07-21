// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://birdworks.uk',
  // Custom domain on GitHub Pages -> base stays '/'
  base: '/',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  image: {
    // Product photography is the whole design; allow generous widths.
    responsiveStyles: true,
  },
});
