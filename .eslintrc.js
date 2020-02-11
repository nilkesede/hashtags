module.exports = {
  extends: [
    'react-app',
    'xo-space/esnext',
    'xo-react/space',
    'plugin:unicorn/recommended'
  ],
  plugins: [
    'unicorn'
  ],
  rules: {
    semi: ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          camelCase: true,
          snakeCase: false,
          pascalCase: true
        }
      }
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        whitelist: {
          props: true,
          mapStateToProps: true
        }
      }
    ]
  }
}
