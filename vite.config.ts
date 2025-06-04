import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/Admin/',
   build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash].[ext]",
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js"
      }
    }
  },
  plugins: [react()],
})
