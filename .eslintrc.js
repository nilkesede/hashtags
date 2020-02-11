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
    'react/react-in-jsx-scope': 'off'
  }
};
