// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://belcleanfac.com',
  devToolbar: {
    enabled: false
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'nl', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr',
          nl: 'nl',
          en: 'en'
        }
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});