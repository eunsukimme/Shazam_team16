module.exports = {
  plugins: ['simple-import-sort', 'react', 'prettier'],
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
    jest: true, // Enable jest in *.test.{js,jsx,ts,tsx}
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'simple-import-sort/sort': 'error',
  },
  globals: {
    React: 'writable',
  },
};
