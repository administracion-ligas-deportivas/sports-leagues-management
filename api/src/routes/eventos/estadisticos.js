const {
  getEstadisticosFromEvento,
} = require("#src/controllers/eventos/index.js");

module.exports = (eventosRouter) => {
  eventosRouter.route("/:eventoId/estadisticos").get(getEstadisticosFromEvento);
};
