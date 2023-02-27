module.exports = {
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/README.md#configuration
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended", "plugin:react/recommended",
    "standard",
    "prettier"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: [
      "warn",
      2,
      {
        SwitchCase: 1,
        MemberExpression: 1,
        ArrayExpression: 1,
        ImportDeclaration: 1,
        FunctionExpression: { body: 1, parameters: 1 },
        FunctionDeclaration: { body: 1, parameters: 1 },
      },
    ],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-var": "error",
    "eol-last": ["error", "always"],
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "no-multiple-empty-lines": [2, { max: 1, maxEOF: 1 }],
    "no-unreachable": "error",
    "sort-imports": "warn",
    "object-curly-spacing": ["error", "always"],

  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
