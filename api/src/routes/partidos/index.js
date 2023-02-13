const partidosRouter = require("express").Router();

const {
  getPartidos,
  getPartidoById,
  updatePartido,
  deletePartido,
} = require("#src/controllers/partidos/index.js");

// const { initRouterSubroutes } = require("#src/utils/routes.js");

// const routes = [getPartidos, getPartidoById, updatePartido, deletePartido];

partidosRouter.route("/").get(getPartidos);
partidosRouter
  .route("/:partidoId")
  .get(getPartidoById)
  .put(updatePartido)
  .delete(deletePartido);

// initRouterSubroutes(partidosRouter, routes);

module.exports = { partidosRouter };
