module.exports = {
  env: {
    browser: true,
    es2021: true,
    webextensions: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  plugins: ['react'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'no-plusplus': 'off',
    'comma-dangle': 'off',
    'operator-linebreak': 'off',
    'no-use-before-define': 'off',
    'linebreak-style': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }],
    'jsx-a11y/label-has-associated-control': 'off',
    'prefer-destructuring': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
  },
};
