import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000, // Keeps your local development on port 3000 like CRA did
    open: true, // Automatically pops open your browser on server start
  },
});