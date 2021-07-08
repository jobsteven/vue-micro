import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['vue', 'vue-router']
    },
    lib: {
      entry: 'src/micro.js',
      formats: ['es']
    }
  }
});
