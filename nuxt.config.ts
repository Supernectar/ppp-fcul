import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: false,
	app: {
		head: {
			link: [
				// {
				// 	rel: 'stylesheet',
				// 	href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
				// }
			],
			script: [
				// {
				// 	src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
				// }
				{
					src: 'https://cdn.tailwindcss.com'
				}

				// {
				// 	src: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js'
				// }
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
