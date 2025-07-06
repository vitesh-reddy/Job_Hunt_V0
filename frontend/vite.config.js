import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
// import react from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  server: {
      watch: {
        ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
      },
    },  
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@components': path.resolve('./src/components'),
      '@pages': path.resolve('./src/pages'),
      '@styles': path.resolve('./src/styles'), 
      '@services': path.resolve('./src/services'), 
      '@utils': path.resolve('./src/utils'), 
      '@store': path.resolve('./src/store'), 
    },
  },    
})
