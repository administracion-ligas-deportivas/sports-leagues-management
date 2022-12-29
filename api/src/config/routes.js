import { ROUTES_WITH_CONTROLLERS } from "../constants/routes.js";

const initRoutes = (app) => {
  ROUTES_WITH_CONTROLLERS.forEach((route) => {
    app.use(route.path, route.router);
  });
};

export { initRoutes };
