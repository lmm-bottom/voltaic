import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/sys/dev/': {
        target: 'http://120.77.240.215:8856',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sys/, ''),
      }
    }
  },
  define: {
    'process.env': {}
  }

})
