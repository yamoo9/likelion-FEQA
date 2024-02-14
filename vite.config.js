import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/EUID',
  plugins: [react()],
  server: {
    port: 3000, // default: 5173
    open: true, // default: false
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  css: {
    devSourcemap: true,
    modules: {
      // generateScopedName: '[name]__[local]--[hash:base64:12]',
    },
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
          reactDom: ['react-dom'],
          reactRouter: ['react-router-dom'],
        },
      },
    },
  },
});
