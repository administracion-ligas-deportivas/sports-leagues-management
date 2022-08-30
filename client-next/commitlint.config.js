module.exports = {
  extends: ["@commitlint/config-conventional"],
  // Si un commit no tiene un mensaje correcto, se eliminará dicho mensaje, por
  // lo que, al menos por el momento, no se rechazará el commit para no
  // perderlo, sino que se dará un warning, pero hay que procurar seguir los
  // lineamientos.
  /* rules: {
    "header-max-length": [1, "always", 50],
    "body-max-line-length": [1, "always", 72],
    "footer-max-line-length": [1, "always", 72],
    "type-case": [1, "always", "lower-case"],
    "type-empty": [1, "never"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [1, "never", "."],
    "subject-case": [
      1,
      "always",
      [
        "sentence-case",
        "start-case",
        "pascal-case",
        "upper-case",
        "lower-case",
        "camel-case",
      ],
    ],
    "type-enum": [
      1,
      "always",
      [
        "config",
        // https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
  }, */
};
