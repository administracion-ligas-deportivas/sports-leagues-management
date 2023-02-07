const partidosRouter = require("express").Router();

const {
  getPartidos,
  getPartidoById,
  deletePartido,
  updatePartido,
} = require("#src/controllers/partidos.js");

partidosRouter.route("/").get(getPartidos);
partidosRouter
  .route("/:partidoId")
  .get(getPartidoById)
  .delete(deletePartido)
  .put(updatePartido);

module.exports = { partidosRouter };
