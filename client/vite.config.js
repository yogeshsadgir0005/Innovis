import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  resolve: {
    alias: {
      // Allows you to import files using '@/' instead of relative paths like '../../'
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000, // Standardizes the dev server port
    open: true, // Automatically opens the browser on start
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
});