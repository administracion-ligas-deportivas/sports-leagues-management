module.exports = {
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/README.md#configuration
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "react-refresh"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-var": "error",
    "eol-last": ["error", "always"],
    // https://github.com/ArnaudBarre/eslint-plugin-react-refresh
    "react-refresh/only-export-components": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
