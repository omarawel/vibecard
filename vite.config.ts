import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/components': '/VibeCard/src/components',
      '@/assets': '/VibeCard/src/assets',
      '@/hooks': '/VibeCard/src/hooks',
      '@/lib': '/VibeCard/src/lib',
      '@/services': '/VibeCard/src/services',
      '@/store': '/VibeCard/src/store',
      '@/locales': '/VibeCard/src/locales',
    },
  },
})