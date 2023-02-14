const {
  getEquiposByPartidoId,
  updateEquiposPartido,
} = require("#src/controllers/partidos/index.js");

module.exports = (partidosRouter) => {
  partidosRouter
    .route("/:partidoId/equipos")
    .get(getEquiposByPartidoId)
    .put(updateEquiposPartido);
};
