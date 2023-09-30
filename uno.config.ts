import { defineConfig } from 'unocss'
import { presetIcons, presetUno, presetAttributify, presetTypography, presetWebFonts } from 'unocss'

export default defineConfig({
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