module.exports = {
  root: true,
  extends: '@react-native-community',
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    'no-warning-comments': 'off',
    'no-process-env': 'off',
    'import/no-cycle': 'off',
    'react/jsx-no-bind': 'off',
    '@shopify/jest/no-vague-titles': 'off',
    '@shopify/jsx-no-complex-expressions': 'off',
    'import/no-named-as-default': 'off',
    '@shopify/images-no-direct-imports': 'off',
    '@shopify/jest/no-snapshots': 'off',
    'no-console': 'off',
    camelcase: 'off',
    'no-extend-native': 'off',
    'max-params': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'no-spaced-func': 'off',
    'max-len': [
      'error',
      {
        code: 200,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/no-autofocus': 'off',
  },
  ignorePatterns: [],
};
