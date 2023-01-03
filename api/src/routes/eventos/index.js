const {
  getEventos,
  createEvento,
  getEventoById,
  deleteEvento,
} = require("#src/controllers/eventos/index.js");

const { checkParamsId, validateRules } = require("#src/middlewares/index.js");

const { eventoExists } = require("#src/middlewares/eventos.js");
const { initRouterSubroutes } = require("#src/utils/routes.js");

const partidosRoutes = require("./partidos.js");
const equiposRoutes = require("./equipos.js");
const estadisticosRoutes = require("./estadisticos.js");
const formatosRoutes = require("./formatos.js");
const pagosRoutes = require("./pagos.js");
const { hasRoles } = require("#src/middlewares/roles.js");
const { ROLES } = require("#src/constants/roles.js");

const routes = [
  partidosRoutes,
  equiposRoutes,
  estadisticosRoutes,
  formatosRoutes,
  pagosRoutes,
];

const eventosRouter = require("express").Router();

eventosRouter
  .route("/")
  // Solo el admin puede obtener todos los eventos. El organizador puede obtener
  // sus eventos.
  .get([hasRoles(ROLES.ADMIN)], getEventos)
  // Solo un organizador puede crear eventos.
  .post(hasRoles(ROLES.ORGANIZADOR), createEvento);

// Revisar que todas las rutas siguientes tengan el id de evento y validar las
// reglas.
// https://expressjs.com/es/guide/using-middleware.html#middleware.router
eventosRouter.use("/:eventoId", [
  checkParamsId("eventoId"),
  validateRules,
  eventoExists,
]);

eventosRouter.route("/:eventoId").get(getEventoById).delete(deleteEvento);

initRouterSubroutes(eventosRouter, routes);

module.exports = { eventosRouter };
