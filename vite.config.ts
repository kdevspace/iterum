import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: '#app',
        additionalPrerenderRoutes: [
          '/codex',
          '/principles',
          '/practices',
          '/community',
          '/about',
        ],
        previewMiddlewareEnabled: true,
      },
    }),
  ],
  server: {
    port: 4322,
  },
});
