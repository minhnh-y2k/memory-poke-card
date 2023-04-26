// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Memory Poke Card',
      meta: [
        {
          name: 'google-site-verification',
          content: 'VXBEISxR68bb7rPEW30GmJTzv4mfhA4lz7XzlHIYG_Y'
        },
        {
          name: 'title',
          content: 'Memory Poke Card',
        },
        {
          name: 'description',
          content: 'Memory Poke Card is a memory game with Pokemon cards. Find all the pairs of cards in the shortest possible time.'
        },
        {
          name: 'keywords',
          content: 'pokemon memory game, pokemon memory card, pokemon memory card game'
        }
      ],

    }
  },
  css: [
    'normalize.css',
    '@/assets/scss/main.scss',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/scss/_variables.sass"',
        },
      },
    },
  }
})
