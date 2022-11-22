const {
  getEventos,
  createEvento,
  getEventoById,
  deleteEvento,
} = require("../controllers/eventos");

const eventosRouter = require("express").Router();

eventosRouter.route("/").get(getEventos).post(createEvento);
eventosRouter.route("/:eventoId").get(getEventoById).delete(deleteEvento);

module.exports = { eventosRouter };
