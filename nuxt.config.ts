// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  pages: true,
  devtools: {
    enabled: true,
    componentInspector: false
  },
  modules: [
    '@vite-pwa/nuxt',
    'radix-vue/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-rating',
    '@vueuse/nuxt',
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  app: {
    head: {
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
    }
  },
  pwa: {
    manifest: {
      name: 'App Store',
      lang: 'en'
    }
  }
})