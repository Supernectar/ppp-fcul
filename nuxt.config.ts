import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{
					rel: 'stylesheet',
					href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
				}
				// {
				// 	rel: 'stylesheet',
				// 	href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css'
				// }
			],
			script: [
				{
					src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
				}
				// {
				// 	// Required for dropdowns to work
				// 	src: 'https://unpkg.com/flowbite@1.4.5/dist/flowbite.js'
				// }
			]
		}
	},
	modules: ['nuxt-windicss']
});
