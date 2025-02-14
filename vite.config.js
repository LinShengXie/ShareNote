import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/ShareNote/',  // Add this line - should match your repository name
  plugins: [vue()],
})
