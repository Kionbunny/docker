import { defineConfig } from 'vite';

console.log('Vite config loaded'); // Add this line to verify

export default defineConfig({
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: 'dist',
  },
});
