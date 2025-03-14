import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate', // Automáticamente actualiza el service worker
      devOptions: {
        enabled: true
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\.(?:js|css|html)$/,
            handler: 'NetworkFirst', // Cache-first o Network-first
            options: {
              cacheName: 'assets-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 24 * 60 * 60, // 24 horas
              },
            },
          },
        ],
      },
      manifest: {
        name: 'Mi Cabina',
        short_name: 'Cabina',
        description: 'Cabina Espacial',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone', // Modo sin navegador
        icons: [
          {
            src: '/public/vite.svg',
            sizes: '192x192',
            type: 'image/svg',
          },
          {
            src: '/public/vite.svg',
            sizes: '512x512',
            type: 'image/svg',
          },
        ],
      },
    }),
  ],
})
