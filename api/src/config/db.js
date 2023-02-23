const {
  DEV_DB_PASSWORD,
  DEV_DB_DATABASE,
  DEV_DB_HOSTNAME,
  DEV_DB_USERNAME,
} = require("./dev");

const dialect = "mariadb";

const define = {
  underscored: true,
  freezeTableName: true,
  paranoid: true,
  allowNull: false,
};

const DEFAULT_CONFIG = {
  define,
  dialect,
};

module.exports = {
  development: {
    ...DEFAULT_CONFIG,
    host: DEV_DB_HOSTNAME,
    username: DEV_DB_USERNAME,
    password: DEV_DB_PASSWORD,
    database: DEV_DB_DATABASE,
  },
  test: {
    ...DEFAULT_CONFIG,
    username: process.env.TEST_DB_USERNAME,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME,
    host: process.env.TEST_DB_HOSTNAME,
  },
  production: {
    ...DEFAULT_CONFIG,
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
  },
};
