// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Normally served from the domain root. Set BASE_PATH (e.g. `/Shona/`) to
  // build a copy that lives in a sub-folder, such as a review upload —
  // see the `build:review` script.
  base: process.env.BASE_PATH || '/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});