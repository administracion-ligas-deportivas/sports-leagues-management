const { ROUTES_WITH_CONTROLLERS } = require("../constants/routes.js");

const initRoutes = (app) => {
  ROUTES_WITH_CONTROLLERS.forEach((route) => {
    app.use(route.path, route.router);
  });
};

module.exports = { initRoutes };
