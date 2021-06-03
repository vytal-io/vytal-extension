module.exports = {
  env: {
    browser: true,
    es2021: true,
    webextensions: true,
  },
  // settings: {
  //   'import/resolver': {
  //     typescript: {},
  //   },
  // },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-plusplus': 'off',
    'comma-dangle': 'off',
    'operator-linebreak': 'off',
    'no-use-before-define': 'off',
    'linebreak-style': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'jsx-a11y/label-has-associated-control': 'off',
    'prefer-destructuring': 'off'
  },
};
