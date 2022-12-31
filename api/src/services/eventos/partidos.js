const { partido } = require("#src/db/models/index.js");

const getPartidosFromEvento = async (eventoId) => {
  return await partido.findAll({
    where: {
      eventoDeportivoId: eventoId,
    },
  });
};

module.exports = {
  getPartidosFromEvento,
};
