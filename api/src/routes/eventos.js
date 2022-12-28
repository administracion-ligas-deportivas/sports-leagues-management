const {
  getEventos,
  createEvento,
  getEventoById,
  deleteEvento,
  getPartidosFromEvento,
  getFormatoEvento,
} = require("../controllers/eventos");

const eventosRouter = require("express").Router();

eventosRouter.route("/").get(getEventos).post(createEvento);
eventosRouter.route("/:eventoId").get(getEventoById).delete(deleteEvento);
eventosRouter.route("/:eventoId/partidos").get(getPartidosFromEvento);
eventosRouter.route("/:eventoId/formatos").get(getFormatoEvento);

module.exports = { eventosRouter };
