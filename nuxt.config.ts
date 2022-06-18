import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false, // para o localstorage funcionar
  app: {
    head: {
      link: [
        {
          link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        },
        {
          link: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        },
        {
          link: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css'
        }
      ],
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
