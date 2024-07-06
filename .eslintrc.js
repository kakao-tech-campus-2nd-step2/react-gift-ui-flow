module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'json-format',
    'simple-import-sort',
    '@emotion',
    'prettier',
  ],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        alphabetize: {
          order: 'desc',
          caseInsensitive: true,
        },
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.js', '.jsx'],
      },
    ],
    '@typescript-eslint/no-use-before-define': ['off'],
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.ts', '**/*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // react first, next second, then packages starting with a character
              ['^react$', '^next', '^[a-z]'],
              // Packages starting with @
              ['^@'],
              // Packages starting with ~
              ['^~'],
              // Imports starting with ../
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Imports starting with ./
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports
              ['^.+\\.s?css$'],
              // Side effect imports
              ['^\\u0000'],
            ],
          },
        ],
      },
    },
  ],
  ignorePatterns: ['src/**', '**/build/**/*', '.eslintrc.js', 'craco.config.js'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
