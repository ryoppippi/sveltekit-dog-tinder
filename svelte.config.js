import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
import path from 'path';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    postcss: true,
  }),

  kit: {
    adapter: adapter(),
  },
};

export default config;
