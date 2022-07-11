import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false, // para o localstorage funcionar
  telemetry: false,
  modules: ['nuxt-windicss', '@pinia/nuxt', '@formkit/nuxt', '@vueuse/nuxt']
});
