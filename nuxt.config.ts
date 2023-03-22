// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Memory Poke Card'
    }
  },
  css: [
    'normalize.css',
    '@/assets/styles/main.scss',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/_variables.sass"',
        },
      },
    },
  }
})
