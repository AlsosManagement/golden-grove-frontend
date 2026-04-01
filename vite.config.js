import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// All routes to prerender (used by scripts/prerender.js after build)
export const prerenderRoutes = [
  '/',
  '/about',
  '/programs',
  '/programs/residential',
  '/programs/php',
  '/programs/co-occurring',
  '/programs/mat',
  '/therapy',
  '/resources',
  '/insurance',
  '/faq',
  '/contact',
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/golden-grove-frontend/',
})
