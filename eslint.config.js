import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'quotes': ['warn', 'single'],
      'semi': ['warn', 'always'],
      'eqeqeq': ['warn', 'always'],
      'no-console': 'warn',
      'no-var': 'error',
      'indent': ['warn', 2],
      'no-debugger': 'error',
      'no-undef': 'error',
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'no-mixed-spaces-and-tabs': 'error',
    },
  },
]);
