import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		}),
		vitePreprocess()
	],

	kit: {
		adapter: adapter()
	},

	compilerOptions: {
		// runes: true
	},

	vitePlugin: {
		inspector: true
	}
};

export default config;
