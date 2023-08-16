module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
			},
		],
		'react/prop-types': 'off',
		'import/extensions': [
			'error',
			'never',
			{
				json: 'always',
				jsx: 'never',
			},
		],
		'import/no-unresolved': [0, { ignore: ['^@/'] }],
	},
	plugins: ['prettier'],
};
