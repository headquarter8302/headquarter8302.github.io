// https://astro.build/config
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';
export default defineConfig({
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes(".old") &&
        !page.includes("dumpster"),
    }),
    preact()
  ],
  site: 'https://headquarter8302.github.io',
  // scopedStyleStrategy: 'class',
  devToolbar: {
    enabled: false
  }
});
