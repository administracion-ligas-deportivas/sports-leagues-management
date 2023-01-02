const { equipoEventoDeportivo } = require("#src/db/models/index.js");
const { Op } = require("sequelize");

const isEquipoInEvento = async (equipoId, eventoDeportivoId) => {
  const foundEquipo = await equipoEventoDeportivo.findOne({
    where: {
      equipoId,
      eventoDeportivoId,
    },
  });

  return foundEquipo !== null;
};

const areEquiposInEvento = async (evento, equiposIds) => {
  // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
  const foundEquipos = await evento.getEquipos({
    where: { id: { [Op.or]: equiposIds } },
  });

  console.log({ foundEquipos, equiposIds });

  const notFoundIds = equiposIds.filter(
    (equipoId) => !foundEquipos.some((equipo) => equipo.id === equipoId)
  );

  return { wereFound: foundEquipos.length === equiposIds.length, notFoundIds };
};

module.exports = {
  isEquipoInEvento,
  areEquiposInEvento,
};
