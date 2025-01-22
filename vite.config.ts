import {reactRouter} from '@react-router/dev/vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	resolve: {
		extensions: [
			'.js',
			'.ts',
			'.tsx',
			'.ts',
		],
		mainFields: ['module'],
	},
	css: {
		postcss: {
			plugins: [tailwindcss, autoprefixer],
		},
	},
	plugins: [
		reactRouter(),
		tsconfigPaths(),
	],
	optimizeDeps: {
		include: [
			'@mui/material',
			'@emotion/react',
			'@emotion/styled',
		],
		force: true,
	},
});
