import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
	{
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: 'module',
			parser: tsparser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		env: {
			node: true,
			es2021: true,
		},
		plugins: {
			'@typescript-eslint': tseslint,
		},
		rules: {
			...eslint.configs.recommended.rules,
			...tseslint.configs.recommended.rules,
			'import/order': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/display-name': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
		},
	},
];
