import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    proxy: {
      '/zenquote': {
        target: 'https://zenquotes.io/api/today',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/zenquote/, ''),
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});