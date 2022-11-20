const { DB_PASSWORD, DB_DATABASE, DB_HOST, DB_USERNAME } = require("./config");

const define = {
  underscored: true,
  freezeTableName: true,
  paranoid: true,
  allowNull: false,
};

module.exports = {
  development: {
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    dialect: "mariadb",
    define,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mariadb",
    define,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mariadb",
    define,
  },
};
