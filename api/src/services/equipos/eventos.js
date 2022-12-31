const { equipoEventoDeportivo } = require("#src/db/models/index.js");

const isEquipoInEvento = async (equipoId, eventoDeportivoId) => {
  const foundEquipo = await equipoEventoDeportivo.findOne({
    where: {
      equipoId,
      eventoDeportivoId,
    },
  });

  return foundEquipo !== null;
};

module.exports = {
  isEquipoInEvento,
};
