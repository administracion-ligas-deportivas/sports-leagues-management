const { DB_PASSWORD, DB_DATABASE, DB_HOST, DB_USERNAME } = require("./config");

module.exports = {
  development: {
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    dialect: "mariadb",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mariadb",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mariadb",
  },
};
