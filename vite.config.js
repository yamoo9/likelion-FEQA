import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: '/likilion-FEQA/',
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
});
