const formatosRouter = require("express").Router();

const {
  getFormatoEvento,
  getFormatoById,
  createFormatoEvento,
} = require("#src/controllers/formatoEventoDeportivo.js");

formatosRouter.route("/").get(getFormatoEvento).post(createFormatoEvento);

formatosRouter.route("/:formatoId").get(getFormatoById);

module.exports = { formatosRouter };
