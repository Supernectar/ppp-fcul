import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			script: [
				{
					src: 'https://cdn.tailwindcss.com'
				},
				{
					src: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js'
				}
			]
		}
	},
	modules: [
		'nuxt-windicss',
		'@pinia/nuxt',
		'@formkit/nuxt',
		'@vueuse/nuxt'
	]
});
