// Using simple Vite + Express setup (not TanStack Start)
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    tsconfigPaths: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
