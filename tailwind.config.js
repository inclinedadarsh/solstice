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
			'primary-text': '#111',
			'primary-bg--dark': '#111',
			'primary-text--dark': '#ddd',
		},
	},
	plugins: [],
};
