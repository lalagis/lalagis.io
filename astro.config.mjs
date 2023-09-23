import { defineConfig } from 'astro/config'
import react from "@astrojs/react"

import UnoCSS from 'unocss/astro'
import { presetIcons, presetUno, presetAttributify, presetTypography } from 'unocss'

// https://astro.build/config
export default defineConfig({
  site: 'https://lalagis.github.io',
  base: '/lalagis.io',
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
        })
      ]
    })
  ],
})