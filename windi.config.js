module.exports = {
	// important: true,
	content: ['./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			transitionProperty: {
				width: 'width'
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};
