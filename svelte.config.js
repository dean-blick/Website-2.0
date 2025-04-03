//import adapter from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess({typescript: true}),

	kit: {
		adapter: adapter(),
		alias: { 'lib/': './src/routes/lib/' },
	}
};

export default config;
