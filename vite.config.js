import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/new-pig-mexico-redesign/',

  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        pigAlgorithm: resolve(
          __dirname,
          'algoritmo-pig/index.html'
        ),
        blog: resolve(
          __dirname,
          'blog/index.html'
        )
      }
    }
  }
});
