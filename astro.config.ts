import million from 'million/compiler';
import { defineConfig } from 'astro/config'
import react from "@astrojs/react"
import UnoCSS from 'unocss/astro'

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
    })
  ]
})