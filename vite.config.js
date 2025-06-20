import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  test: {
    environment: 'jsdom',
    globals: true, // optional, to use global test functions like `describe`, `it`
    setupFiles: './src/setupTests.js', // optional for custom setup like jest-dom
  }
})
