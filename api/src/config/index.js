import middlewaresConfig from "./middlewares.js";
import routesConfig from "./routes.js";
import devConfig from "./dev.js";
import { faker } from "@faker-js/faker";

const PORT = process.env.PORT || 3001;

faker.setLocale("es_MX");

export default {
  PORT,
  ...devConfig,
  ...middlewaresConfig,
  ...routesConfig,
};
