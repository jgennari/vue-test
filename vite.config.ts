import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // Proxy API requests to Azure Functions
      '/api': {
        target: 'http://localhost:7071',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },
  // For production build
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue']
        }
      }
    }
  }
})
