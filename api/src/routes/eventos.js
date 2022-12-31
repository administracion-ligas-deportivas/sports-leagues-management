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
const { requiredEventoId } = require("#src/middlewares/eventos.js");
const { canPay } = require("#src/middlewares/pagos.js");

const eventosRouter = require("express").Router();

eventosRouter.route("/").get(getEventos).post(createEvento);
eventosRouter.route("/:eventoId").get(getEventoById).delete(deleteEvento);
eventosRouter.route("/:eventoId/partidos").get(getPartidosFromEvento);
eventosRouter.route("/:eventoId/formatos").get(getFormatoEvento);
eventosRouter.route("/:eventoId/equipos").get(getEquiposFromEvento);
eventosRouter.route("/:eventoId/estadisticos").get(getEstadisticosFromEvento);
eventosRouter
  .route("/:eventoId/pagos")
  .post([requiredEventoId, canPay], realizarPagoEnEvento);

module.exports = { eventosRouter };
