const partidosRouter = require("express").Router();

const {
  getPartidos,
  getPartidoById,
  deletePartido,
} = require("../controllers/partidos");

partidosRouter.route("/").get(getPartidos);
partidosRouter.route("/:partidoId").get(getPartidoById).delete(deletePartido);

module.exports = { partidosRouter };
