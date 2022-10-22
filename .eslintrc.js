module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb-typescript',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint', 'css-modules'],
  rules: {
    '@typescript-eslint/dot-notation': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
  },
};
