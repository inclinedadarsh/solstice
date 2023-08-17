/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
		colors: {
			'primary-bg': '#fff',
			'secondary-bg': '#f0f0f0',
			'primary-text': '#0f172a',
			'secondary-text': '#516585',

			'primary-bg--dark': '#0f172a',
			'secondary-bg--dark': '#1e293b',
			'primary-text--dark': '#fff',
			'secondary-text--dark': '#94a3b8',
		},
	},
	plugins: [],
};
