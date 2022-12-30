const partidosRouter = require("express").Router();

const {
  getPartidos,
  getPartidoById,
  deletePartido,
} = require("#src/controllers/partidos.js");

partidosRouter.route("/").get(getPartidos);
partidosRouter.route("/:partidoId").get(getPartidoById).delete(deletePartido);

module.exports = { partidosRouter };
