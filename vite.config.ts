import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/csur-sarcomas-maranon/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.png', 'icons/*.svg'],
      manifest: {
        name: 'CSUR Sarcomas — HGUGM Madrid',
        short_name: 'CSUR Sarcomas',
        description: 'Comité Multidisciplinar de Sarcomas y Tumores Musculoesqueléticos — Hospital General Universitario Gregorio Marañón, Madrid',
        theme_color: '#1e40af',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/csur-sarcomas-maranon/',
        start_url: '/csur-sarcomas-maranon/',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ],
        shortcuts: [
          {
            name: 'Buscador de Sarcomas',
            url: '/csur-sarcomas-maranon/#/buscador',
            description: 'Buscar sarcomas por nombre o tipo'
          },
          {
            name: 'Decisión Clínica',
            url: '/csur-sarcomas-maranon/#/decision',
            description: 'Algoritmos de diagnóstico y tratamiento'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } }
          }
        ]
      }
    })
  ]
})
