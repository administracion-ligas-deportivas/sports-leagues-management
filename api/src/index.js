// https://www.npmjs.com/package/dotenv
require("dotenv").config();

const express = require("express");
const db = require("#src/db/models/index.js");

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

const SEQUELIZE_INITIAL_OPTIONS = {
  force: false,
  // https://sequelize.org/docs/v6/getting-started/#logging
  // https://stackoverflow.com/questions/28927836/prevent-sequelize-from-outputting-sql-to-the-console-on-execution-of-query
  logging: false,
};

const server = db.sequelize.sync(SEQUELIZE_INITIAL_OPTIONS).then(() => {
  return app.listen(PORT, () => {
    db.sequelize.options = {
      ...db.sequelize.options,
      logging: true,
    };

    console.log(`Server running on port ${PORT}`);
  });
});

module.exports = { app, server };
