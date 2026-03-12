// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import Icons from 'unplugin-icons/vite';
import starlightVersions from 'starlight-versions';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: "https://scilus.github.io",
	base: "/sf-mouse",
	integrations: [
		starlight({
			title: 'sf-mouse',
			plugins: [
				starlightVersions({
					versions: [
						{ slug: '0.1.0', label: 'v0.1.0' },
					],
				}),
			],
			logo: {
				light: './src/assets/sf-mouse-light-logo.png',
				dark: './src/assets/sf-mouse-dark-logo.png',
				replacesTitle: false,
			},
			social: [{ icon: 'github', label: 'sf-mouse', href: 'https://github.com/scilus/sf-mouse' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Prerequistes installation', slug: 'guides/installation' },
						{ label: 'Inputs', slug: 'guides/inputs' },
						{ label: 'Run the pipeline', slug: 'guides/usage' },
						{ label: "Parameters", slug: 'guides/parameters' },
						{ label: "Advanced users", slug: 'guides/advanced' },
						{ label: 'No internet access', slug: 'guides/nointernet' },
						{ label: 'Outputs', slug: 'guides/outputs' },
						{ label: 'Frequently Asked Questions', slug: 'guides/faq' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
            customCss: [
                './src/styles/global.css',
                './src/styles/custom.css'
            ],
		}),
	],
	vite: {
		plugins: [Icons({ compiler: 'astro' }), tailwindcss()],
		server: {
			watch: {
				ignored: [
					"**/.pnpm-store/**/*",
					"**/node_modules/**/*"
				],
			},
		},
	},
});
