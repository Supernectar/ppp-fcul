import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{
					// rel: 'stylesheet',
					// href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
				}
			],
			script: [
				{
					src: 'https://cdn.tailwindcss.com'
				}
			]
		}
	},
	modules: ['nuxt-windicss', '@pinia/nuxt']
});
