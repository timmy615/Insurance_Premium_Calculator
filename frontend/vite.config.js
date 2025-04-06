import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/calculate': 'http://localhost:5000',  // 讓前端 POST /calculate 自動轉發到 Flask
    },
  },
})
