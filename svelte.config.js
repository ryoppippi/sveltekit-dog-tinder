import path from 'node:path';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @param {...string} args */
function relativePath(...args) {
	return path.resolve(import.meta.dirname, ...args);
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
	],

	kit: {
		adapter: adapter(),
		typescript: {
			config(config) {
				config.include.push(relativePath('../uno.config.ts'));
			},
		},
	},

	compilerOptions: {
		// runes: true
	},

	vitePlugin: {
		inspector: true,
	},
};

export default config;
