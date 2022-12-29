// https://www.npmjs.com/package/dotenv
import { config } from "dotenv";
import db from "./db/models/index.js";
import express from "express";

import {
  PORT,
  initMiddlewaresAfterRoutes,
  initMiddlewaresBeforeRoutes,
  initRoutes,
} from "./config/index.js";

config();
const app = express();

initMiddlewaresBeforeRoutes(app);
initRoutes(app);
initMiddlewaresAfterRoutes(app);

const force = false;

const server = db.sequelize.sync({ force }).then(() => {
  return app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

export { app, server };
