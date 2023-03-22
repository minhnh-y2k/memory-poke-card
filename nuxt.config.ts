// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Memory Poke Card'
    }
  },
  css: [
    'normalize.css',
    '~/assets/css/main.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
