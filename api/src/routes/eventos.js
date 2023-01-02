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
  getPagosFromEvento,
  getPagosFromEquipoInEvento,
} = require("#src/controllers/eventos/index.js");

const {
  isUsuarioEncargadoEquipo,
  equipoExists,
  isEquipoInEvento,
  areEquiposInEvento,
  equiposExist,
} = require("#src/middlewares/equipos.js");

const {
  checkParamsId,
  validateRules,
} = require("#src/middlewares/validateRules.js");

const { canPay } = require("#src/middlewares/pagos.js");
const { eventoExists } = require("#src/middlewares/eventos.js");
const { createPartido } = require("#src/controllers/partidos.js");

const eventosRouter = require("express").Router();

eventosRouter.route("/").get(getEventos).post(createEvento);

// Revisar que todas las rutas siguientes tengan el id de evento y validar las
// reglas.
// https://expressjs.com/es/guide/using-middleware.html#middleware.router
eventosRouter.use("/:eventoId", [
  checkParamsId("eventoId"),
  validateRules,
  eventoExists,
]);

eventosRouter.route("/:eventoId").get(getEventoById).delete(deleteEvento);

eventosRouter
  .route("/:eventoId/partidos")
  .get(getPartidosFromEvento)
  .post([equiposExist, areEquiposInEvento], createPartido);

eventosRouter.route("/:eventoId/formatos").get(getFormatoEvento);

eventosRouter.route("/:eventoId/equipos").get(getEquiposFromEvento);

eventosRouter.route("/:eventoId/estadisticos").get(getEstadisticosFromEvento);

eventosRouter
  .route("/:eventoId/pagos")
  // Solo un administrador y organizador de evento pueden ver los pagos de un
  // evento.
  .get([], getPagosFromEvento);

eventosRouter.use("/:eventoId/equipos/:equipoId", [
  checkParamsId("equipoId"),
  validateRules,
  equipoExists,
  isEquipoInEvento,
]);

eventosRouter
  // Obtener pagos si es organizador del evento o encargado del equipo.
  .route("/:eventoId/equipos/:equipoId/pagos")
  // Un organizador no puede realizar los pagos de un equipo.
  .get([], getPagosFromEquipoInEvento)
  .post([isUsuarioEncargadoEquipo, canPay], realizarPagoEnEvento);

module.exports = { eventosRouter };
