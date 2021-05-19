module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'src/migrations',
    '.eslintrc.js',
    'lib'
  ],
  rules: {
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    'import/prefer-default-export': 'off',
    'no-extra-boolean-cast': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'max-len': ['error', { 'code': 150 }],
    'class-methods-use-this': 'off',
    'no-confusing-arrow': 'off',
    'max-classes-per-file': 'off',
    'no-param-reassign': 'warn',
    'object-curly-newline': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'warn',
    'import/no-cycle': 'off',
    'no-mixed-operators': 'off',
    'linebreak-style': 'off',
    'no-bitwise': 'off',
    'no-prototype-builtins': 'off',
    'no-case-declarations': 'off',
    'prefer-destructuring': ['error', { 'object': true, 'array': false }],
    'no-plusplus': 'off',
    'function-paren-newline': 'off',
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/quotes': ['error', 'single', { 'allowTemplateLiterals': true }]
  },
};
