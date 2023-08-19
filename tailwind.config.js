const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				illustrations:
					"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url('https://images.unsplash.com/photo-1583324622624-3c34dc79b153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=474&q=80')",
				websites:
					"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url('https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=455&q=80')",
				applications:
					"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80')",
			},
			transitionProperty: {
				absolute: 'top, right, bottom, left',
			},
		},
		colors: {
			'primary-bg': '#fff',
			'secondary-bg': '#f0f0f0',
			'primary-text': '#0f172a',
			'secondary-text': '#516585',

			'primary-bg--dark': '#0f172a',
			'secondary-bg--dark': '#1e293b',
			'primary-text--dark': '#fff',
			'secondary-text--dark': '#94a3b8',

			transparent: 'rgba(0, 0, 0, 0)',
			skyblue: colors.sky,
		},
	},
	plugins: [],
	darkMode: 'class',
};
