module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["airbnb", "aribnb/hooks"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		"react/react-in-jsx-scope": "off",
		indent: ["error", "tab"],
		"no-tabs": "off",
		"react/jsx-indent": ["error", "tab"],
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "arrow-function",
			},
		],
	},
};
