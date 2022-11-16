const PORT = process.env.PORT || 3001;

const DB_USERNAME = process.env.DB_USERNAME || "root";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_DATABASE = process.env.DB_DATABASE || "ligas_deportivas";
const DB_PORT = process.env.DB_PORT || 3306;
const DB_PASSWORD = process.env.DB_PASSWORD;

module.exports = {
  PORT,
  DB_USERNAME,
  DB_HOST,
  DB_DATABASE,
  DB_PORT,
  DB_PASSWORD,
};
