import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false, // para o localstorage funcionar
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.tailwindcss.com'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js'
        },

        // Ver se o caroussel funciona com o link do bootstrap
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
        }
      ]
    }
  },
  modules: ['nuxt-windicss', '@pinia/nuxt', '@formkit/nuxt', '@vueuse/nuxt']
});
