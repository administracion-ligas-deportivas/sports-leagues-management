const { getPartidosFromEvento } = require("#src/controllers/eventos/index.js");

const {
  areEquiposInEvento,
  equiposExist,
} = require("#src/middlewares/equipos.js");

const { createPartido } = require("#src/controllers/partidos.js");
const { isUsuarioOrganizadorEvento } = require("#src/middlewares/eventos.js");

module.exports = (eventosRouter) => {
  eventosRouter
    .route("/:eventoId/partidos")
    .get(getPartidosFromEvento)
    .post(
      [isUsuarioOrganizadorEvento, equiposExist, areEquiposInEvento],
      createPartido
    );
};
