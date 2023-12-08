import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // eslint(),
    ViteYaml(),
  ],
  resolve: {
    alias: {
      '@config': fileURLToPath(new URL('./config', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    }
  }
});
