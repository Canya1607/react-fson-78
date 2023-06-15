module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: ['react-app', 'eslint:recommended', 'plugin:react/recommended'], // add 'prettier' later
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: { 'react/react-in-jsx-scope': 'off', 'react-hooks/exhaustive-deps': 'warn' }
};
