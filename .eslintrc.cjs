const path = require('path');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: [
    '**/node_modules/**',
    '**/dist/**',
    '**/cdk.out/**',
    '**/coverage/**',
    '**/.vite/**',
    '**/vite.config.ts.timestamp-*',
  ],
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.eslint.json'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.config.*', '**/vite.config.*', 'aws-cdk/**/*.ts'],
        packageDir: [
          path.join(__dirname),
          path.join(__dirname, 'common', 'universal'),
          path.join(__dirname, 'app', 'backend'),
          path.join(__dirname, 'app', 'frontend'),
          path.join(__dirname, 'aws-cdk'),
        ],
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  overrides: [
    {
      files: ['aws-cdk/**/*.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-new': 'off',
      },
    },
  ],
};
