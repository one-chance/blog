module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'plugin:@next/next/recommended',
  ],
  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
  ],
  ignorePatterns: ['node_modules/*', '.next/*', '.eslintrc.cjs'],
  rules: {
    'import/extensions': [
      'error',
      {
        tsx: 'never',
        ts: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/require-default-props': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc' /* 'asc'|'desc' */,
          caseInsensitive: true /* 대소문자 구분 없이 정렬 */,
        },
        'newlines-between':
          'never' /* 'import' 그룹 사이의 새 줄 개수를 제어 */,
      },
    ],
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'react/jsx-props-no-spreading': 'off',
  },
};
