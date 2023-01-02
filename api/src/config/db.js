const {
  DEV_DB_PASSWORD,
  DEV_DB_DATABASE,
  DEV_DB_HOST,
  DEV_DB_USERNAME,
} = require("./dev");

const dialect = "mariadb";

const define = {
  underscored: true,
  freezeTableName: true,
  paranoid: true,
  allowNull: false,
};

module.exports = {
  development: {
    host: DEV_DB_HOST,
    username: DEV_DB_USERNAME,
    password: DEV_DB_PASSWORD,
    database: DEV_DB_DATABASE,
    dialect,
    define,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect,
    define,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect,
    define,
  },
};
