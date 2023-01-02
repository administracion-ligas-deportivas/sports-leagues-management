const { getFormatoEvento } = require("#src/controllers/eventos/index.js");

module.exports = (eventosRouter) => {
  eventosRouter.route("/:eventoId/formatos").get(getFormatoEvento);
};
