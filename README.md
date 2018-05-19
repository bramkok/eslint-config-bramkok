# eslint-config-bramkok

> `eslint-config-bramkok` an [ESLint](http://eslint.org) config based on the
[Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) combined
with [Prettier](https://github.com/prettier/prettier) for code formatting.

## Usage

1. Add `eslint-config-bramkok` to your project:
`yarn add eslint-config-bramkok -D -E`.
2. Add peer dependencies:
`yarn add eslint babel-eslint eslint-config-airbnb-base eslint-plugin-import
prettier eslint-config-prettier eslint-plugin-prettier -D -E`.
3. Create `.eslintrc.js` configuration file:
```js
module.exports = {
  extends: ['bramkok'],
};
```
4. Add lint scripts to `package.json`:
```json
"scripts": {
  "lint": "yarn eslint .",
  "lint:fix": "yarn lint --fix"
}
```
5. Run `yarn lint` to lint your code.
6. Run `yarn lint:fix` to lint, format and fix your code.
