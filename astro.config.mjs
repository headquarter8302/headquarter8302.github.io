// https://astro.build/config
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes(".old") &&
        !page.includes("dumpster"),
    })],
  site: 'https://headquarter8302.github.io',
  scopedStyleStrategy: 'class',
  compressHTML: false,
});