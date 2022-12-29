// https://www.npmjs.com/package/dotenv
require("dotenv").config();

const db = require("./db/models");
const express = require("express");

const {
  PORT,
  initMiddlewaresAfterRoutes,
  initMiddlewaresBeforeRoutes,
  initRoutes,
} = require("./config");

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

module.exports = { app, server };
