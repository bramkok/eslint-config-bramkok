/* eslint-env node */

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
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
