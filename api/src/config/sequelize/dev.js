const { resolve } = require("path");
const { DB_CONFIG_BASE_PATH } = require("#src/constants/index.js");

module.exports = {
  "seeders-path": resolve(DB_CONFIG_BASE_PATH, "seeders/dev"),
};
