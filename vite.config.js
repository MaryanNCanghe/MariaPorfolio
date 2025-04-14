import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/MariaPortfolio/',
  resolve: {
    alias: {
      '@assets': '/src/assets', 
    },
  },
  plugins: [react()],
})
