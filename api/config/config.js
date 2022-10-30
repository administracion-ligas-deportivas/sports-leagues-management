const username = process.env.DB_USERNAME || "root";
const host = process.env.DB_HOST || "localhost";

module.exports = {
  development: {
    username,
    password: process.env.DB_PASSWORD,
    database: "ligas_deportivas",
    host,
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
