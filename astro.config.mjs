import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://boundlesstravelogues.com',
  integrations: [react()],
  output: 'static',
  build: {
    // Inline small stylesheets to reduce requests
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      // Enable CSS code splitting
      cssCodeSplit: true,
      // Chunk Three.js and GSAP separately for better caching
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('three') || id.includes('@react-three')) {
                return 'three-vendor';
              }
              if (id.includes('gsap')) {
                return 'gsap-vendor';
              }
            }
          }
        }
      }
    }
  }
});