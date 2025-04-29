// eslint.config.js
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['node_modules/**/*', 'dist/**/*', '.env', 'eslint.config.ts'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: ['./tsconfig.json'],
      },
      globals: {
        process: 'readonly',
        console: 'readonly',
      },
      ecmaVersion: 2021,
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
      prettier: prettierPlugin,
    },
    rules: {
      'no-unused-vars': 'error',
      'prefer-const': 'error',
      'no-unused-expressions': 'error',
      'no-undef': 'error',
      'no-unreachable': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'prettier/prettier': 'error', // Prettier formatting as ESLint errors
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
];
