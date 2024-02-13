module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
    'plugin:react-hooks/recommended',
    // 'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  // parser: '@typescript-eslint/parser',
  // plugins: ['react', '@typescript-eslint'],
  rules: {
    // 'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // "react/jsx-uses-react": "off",
    // "react/react-in-jsx-scope": "off"
  },
};
