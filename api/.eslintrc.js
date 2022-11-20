module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "standard", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-var": "error",
    "eol-last": ["error", "always"],

    indent: ["warn", 2, { SwitchCase: 1 }],
    // "object-curly-newline": ["error", { multiline: true, consistent: true }],
    /**
      https://eslint.org/docs/latest/rules/no-unused-vars#ignorerestsiblings

      No dar error cuando no utilizamos variables que desestructuramos. De esta
      manera, podemos obtener un nuevo objeto sin ciertas propiedades que
      extraemos al desestructurar.
    */
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "no-multiple-empty-lines": [2, { max: 2, maxEOF: 1 }],
    "no-unreachable": "error",
    "sort-imports": "warn",
  },
};
