import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    postcss: true,
  }),

  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: true,
    }),
    paths: {
      base: dev ? '' : '/sveltekit-dog-tinder',
    },
    appDir: 'internal',
    alias: {
      // these are the aliases and paths to them
      $components: path.resolve('./src/components'),
    },
  },
};

export default config;
