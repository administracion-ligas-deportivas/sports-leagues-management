const {
  getEventos,
  createEvento,
  getEventoById,
  deleteEvento,
  getPartidosFromEvento,
  getFormatoEvento,
  getEquiposFromEvento,
  getEstadisticosFromEvento,
  realizarPagoEnEvento,
} = require("#src/controllers/eventos/index.js");

const {
  checkParamsId,
  validateRules,
} = require("#src/middlewares/validateRules.js");

const { canPay } = require("#src/middlewares/pagos.js");
const { eventoExists } = require("#src/middlewares/eventos.js");
const { isUsuarioEncargadoEquipo } = require("#src/middlewares/equipos.js");

const eventosRouter = require("express").Router();

eventosRouter.route("/").get(getEventos).post(createEvento);

// Revisar que todas las rutas siguientes tengan el id de evento y validar las
// reglas.
// https://expressjs.com/es/guide/using-middleware.html#middleware.router
eventosRouter.use("/:eventoId", [checkParamsId("eventoId"), validateRules]);

eventosRouter.route("/:eventoId").get(getEventoById).delete(deleteEvento);
eventosRouter.route("/:eventoId/partidos").get(getPartidosFromEvento);
eventosRouter.route("/:eventoId/formatos").get(getFormatoEvento);
eventosRouter.route("/:eventoId/equipos").get(getEquiposFromEvento);
eventosRouter.route("/:eventoId/estadisticos").get(getEstadisticosFromEvento);

eventosRouter
  .route("/:eventoId/pagos")
  .post([eventoExists, isUsuarioEncargadoEquipo, canPay], realizarPagoEnEvento);

module.exports = { eventosRouter };
