/// <reference types="vitest" />

import million from 'million/compiler';
import { defineConfig } from 'astro/config'
import react from "@astrojs/react"

// unocss
import UnoCSS from 'unocss/astro'
import { presetIcons, presetUno, presetAttributify, presetTypography, presetWebFonts } from 'unocss'

// https://astro.build/config
export default defineConfig({
  site: 'https://lalagis.github.io',
  base: '/lalagis.io',

  vite: {
    plugins: [million.vite({ mode: 'react', server: true, auto: true })],
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        reporter: ['text', 'json', 'html']
      }
    }
  },

  integrations: [
    react(), 
    UnoCSS({
      injectReset: true,
      presets: [
        presetAttributify(),
        presetUno({
          dark: 'media'
        }),
        presetIcons(), 
        presetTypography({
          cssExtend: {
            'a': {
              'text-decoration': 'none',
            }
          }
        }),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: 'Noto Sans SC',
          }
        })
      ]
    })
  ]
})