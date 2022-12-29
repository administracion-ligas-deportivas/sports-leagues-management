const {
  getEventos,
  createEvento,
  getEventoById,
  deleteEvento,
  getPartidosFromEvento,
  getFormatoEvento,
  getEquiposFromEvento,
  getEstadisticosFromEvento,
} = require("../controllers/eventos");

const eventosRouter = require("express").Router();

eventosRouter.route("/").get(getEventos).post(createEvento);
eventosRouter.route("/:eventoId").get(getEventoById).delete(deleteEvento);
eventosRouter.route("/:eventoId/partidos").get(getPartidosFromEvento);
eventosRouter.route("/:eventoId/formatos").get(getFormatoEvento);
eventosRouter.route("/:eventoId/equipos").get(getEquiposFromEvento);
eventosRouter.route("/:eventoId/estadisticos").get(getEstadisticosFromEvento);

module.exports = { eventosRouter };
