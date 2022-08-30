module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // Agregar prettier para no tener problemas de compatibilidad con prettier y
  // eslint.
  extends: [
    // https://www.npmjs.com/package/eslint-config-airbnb
    "airbnb",
    "airbnb/hooks",

    /**
    https://nextjs.org/docs/basic-features/eslint If you already have ESLint
    configured in your application and any of the following conditions are true:

    You have one or more of the following plugins already installed (either
    separately or through a different config such as airbnb or react-app)

    Then we recommend either removing these settings if you prefer how these
    properties have been configured within eslint-config-next or extending
    directly from the Next.js ESLint plugin instead:

    // "next/core-web-vitals",
    */
    "plugin:@next/next/core-web-vitals",
    "plugin:@next/next/recommended",
    "plugin:react/recommended",
    // 'semistandard',
    // https://www.npmjs.com/package/eslint-plugin-prettier
    "prettier",
    "plugin:prettier/recommended",
  ],
  // extends: ["next/core-web-vitals", "airbnb", "airbnb/hooks", "prettier"],
  plugins: ["prettier", "@next/next", "react"],
  // "use-tabs": false,
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        // https://github.com/prettier/eslint-plugin-prettier/issues/206
        // ESLint pedía "Delete ",", pero era porque faltaba la regla aquí,
        // además de en el .prettierrc.js"
        trailingComma: "es5",
        printWidth: 79,
        tabWidth: 2,
      },
    ],
    "no-console": "off",
    /**  https://stackoverflow.com/a/40458301/13562806
     *
     * 2 es un error, 1 es un warning, 0 es off.
     * Semicolon (punto y coma) llevarlo siempre.
     */
    semi: [2, "always"],
    // "space-before-function-paren": ["error", "always"]
    "no-unused-vars": ["warn", "all"],
    "no-var": "error",
    // https://stackoverflow.com/a/68521897/13562806
    // Trailing Comma
    "no-tabs": ["error", { allowIndentationTabs: false }],

    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    // "space-before-function-paren": ["warn", "never"],
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      /**
        https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/  112261cbc84f5b7d74de9b427b529a10b41faece/docs/rules/anchor-is-valid.md#case-i-use-nextjs-and-im-getting-this-error-inside-of-links
       */
      "warn",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
    // Quitar opciones que dan problemas al proyecto de Next.js y provienen de
    // Airbnb.
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
