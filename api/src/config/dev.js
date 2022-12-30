const process = require("process");

const DEV_DB_USERNAME = process.env.DEV_DB_USERNAME || "root";
const DEV_DB_HOST = process.env.DEV_DB_HOST || "localhost";
const DEV_DB_DATABASE = process.env.DEV_DB_DATABASE || "ligas_deportivas";
const DEV_DB_PORT = process.env.DEV_DB_PORT || 3306;
const DEV_DB_PASSWORD = process.env.DEV_DB_PASSWORD;

module.exports = {
  DEV_DB_USERNAME,
  DEV_DB_HOST,
  DEV_DB_DATABASE,
  DEV_DB_PORT,
  DEV_DB_PASSWORD,
};
