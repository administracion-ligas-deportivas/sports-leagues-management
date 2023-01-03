const devConfig = require("./dev");
const { faker } = require("@faker-js/faker");
const middlewaresConfig = require("./middlewares");
const routesConfig = require("./routes");

const PORT = process.env.PORT || 3001;

faker.setLocale("es_MX");

module.exports = {
  PORT,
  ...devConfig,
  ...middlewaresConfig,
  ...routesConfig,
};
