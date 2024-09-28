/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@1eeyerin/eslint-config', 'plugin:storybook/recommended'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
