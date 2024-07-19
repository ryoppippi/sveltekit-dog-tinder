import { isDevelopment } from 'std-env';
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';
import { presetDaisy } from 'unocss-preset-daisy';

export default defineConfig({
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({ autoInstall: isDevelopment }),
		presetDaisy({
			themes: ['cupcake'],
		}),
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
	],
	theme: {
		colors: {
		},
		breakpoints: {
		},
	},
	rules: [
	],
	shortcuts: {
	},
});
