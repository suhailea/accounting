module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/button-has-type': 0,
    'react/jsx-no-undef': ['off', { allowGlobals: true }],
    'no-param-reassign': ['error', { props: false }],
    'jsx-a11y/label-has-associated-control': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
  },
};
