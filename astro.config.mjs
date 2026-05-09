// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://emilioo24.github.io',
  base: '/aara',
  vite: {
    plugins: [tailwindcss()]
  }
});