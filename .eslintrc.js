module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		+'prettier/@typescript-eslint',
		+'plugin:prettier/recommended'
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'react/prop-types': 'off',
		'@typescript-eslint/no-unused-vars': ['error']
	},
	overrides: [
		{
			extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
			rules: {
				'prettier/prettier': ['error', {}, { usePrettierrc: true }]
			}
		}
	],
	settings: {
		react: {
			version: 'detect'
		}
	}
}
