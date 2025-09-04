import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/raju-shah.github.io/',
  css: {
    postcss: './postcss.config.js'
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    target: 'es2015',
    rollupOptions: {
      output: {
        format: 'iife',
        manualChunks: undefined,
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        inlineDynamicImports: true
      },
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  server: {
    port: 3000,
    open: true
  }
})