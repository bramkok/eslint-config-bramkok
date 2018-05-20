/* eslint-env node */

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'func-names': [2, 'as-needed'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        semi: false,
      },
    ],
  },
}
