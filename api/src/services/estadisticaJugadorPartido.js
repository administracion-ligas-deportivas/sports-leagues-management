const { estadisticaJugadorPartido } = require("#src/db/models/index.js");

const createEstadisticaJugadorPartido = async (
  partidoId,
  tipoEstadisticaId,
  jugadorId,
  campos = {},
  transaction
) => {
  const { tiempoTranscurrido, cantidad } = campos;

  return await estadisticaJugadorPartido.create(
    {
      tiempoTranscurrido,
      cantidad,
      partidoId,
      tipoEstadisticaId,
      jugadorId,
    },
    { transaction }
  );
};

module.exports = {
  createEstadisticaJugadorPartido,
};
