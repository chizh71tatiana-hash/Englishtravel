import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 👇 Добавь эти настройки для GitHub Pages
  base: '/Englishtravel/', // Правильный путь для репозитория Englishtravel
  build: {
    outDir: 'dist', // Папка сборки по умолчанию
  },
})
