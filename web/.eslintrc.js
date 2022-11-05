module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    '@next/next/no-img-element': 'off',
    'no-unused-vars': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-no-useless-fragment': 'error',
  },
};
