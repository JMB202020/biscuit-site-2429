import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/2429',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
