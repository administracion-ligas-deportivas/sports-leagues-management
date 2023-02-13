const { getEquiposByPartidoId } = require("#src/controllers/partidos/index.js");

module.exports = (partidosRouter) => {
  partidosRouter.route("/:partidoId/equipos").get(getEquiposByPartidoId);
};
