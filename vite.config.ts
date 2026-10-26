// Using simple Vite + Express setup (not TanStack Start)
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: '.output/public',
    emptyOutDir: true,
  },
});
