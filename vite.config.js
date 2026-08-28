import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/new-pig-mexico-redesign/',

  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        blog: resolve(
          __dirname,
          'blog/index.html'
        ),
        quote: resolve(
          __dirname,
          'cotizador/index.html'
        ),
        catalog: resolve(
          __dirname,
          'catalogo/index.html'
        )
      }
    }
  }
});
