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
