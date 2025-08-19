import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true, // écoute sur toutes les interfaces, donc accessible via IP locale
    port: 3000, // optionnel, tu peux changer le port si besoin
  },
})
