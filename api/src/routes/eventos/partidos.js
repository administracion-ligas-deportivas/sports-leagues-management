const { getPartidosFromEvento } = require("#src/controllers/eventos/index.js");

const {
  areEquiposInEvento,
  equiposExist,
} = require("#src/middlewares/equipos.js");

const { createPartido } = require("#src/controllers/partidos.js");

module.exports = (eventosRouter) => {
  eventosRouter
    .route("/:eventoId/partidos")
    .get(getPartidosFromEvento)
    .post([equiposExist, areEquiposInEvento], createPartido);
};
