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
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.jsx', '.js', '.ts', 'tsx'] },
    ],
    'jsx-a11y/label-has-associated-control': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
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
    'react/react-in-jsx-scope': 'off',
    'no-bitwise': 'off',
    'react/no-array-index-key': 'off',
    'nonblock-statement-body-position': 'off',
    'react/button-has-type': 'off',
    'no-unused-vars': 'warn',
  },
};
