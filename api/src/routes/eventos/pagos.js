const { getPagosFromEvento } = require("#src/controllers/eventos/index.js");

module.exports = (eventosRouter) => {
  eventosRouter
    .route("/:eventoId/pagos")
    // Solo un administrador y organizador de evento pueden ver los pagos de un
    // evento.
    .get([], getPagosFromEvento);
};
