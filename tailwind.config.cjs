module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,mjs,jsx,ts,tsx,svelte}', './public/index.html'],
	safelist: [],
	// whitelistPatterns: [/svelte-/],
	theme: {
		extend: {}
	},
	daisyui: {
		logs: false,
		themes: ['cupcake', 'dark', 'cmyk']
	},
	plugins: [require('daisyui')]
};
