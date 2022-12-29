const { eventoDeportivo } = require("../../db/models");

const getEstadisticosFromEvento = async (eventoId) => {
  const evento = await eventoDeportivo.findByPk(eventoId);

  if (!evento) return null;

  return await evento?.getEstadisticos({
    joinTableAttributes: [],
  });
};

module.exports = {
  getEstadisticosFromEvento,
};
