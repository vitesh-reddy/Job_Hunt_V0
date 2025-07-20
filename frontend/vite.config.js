import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react() , tailwindcss()],
  server: {
      host: true,
      watch: {
        ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
      },  
    },  
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@pages': path.resolve('./src/pages'),
      '@utils': path.resolve('./src/utils'), 
      '@store': path.resolve('./src/store'), 
      '@styles': path.resolve('./src/styles'), 
      '@routes': path.resolve('./src/routes'), 
      '@services': path.resolve('./src/services'), 
      '@components': path.resolve('./src/components'),
      '@constants': path.resolve('./src/constants'), 
    },
  },    
})
