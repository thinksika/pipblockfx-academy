import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Required for SPA routing — serve index.html for all routes
  server: {
    historyApiFallback: true,
  },
  preview: {
    port: 5173,
  },
});
