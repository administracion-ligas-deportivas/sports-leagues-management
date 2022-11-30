const { estadisticaJugadorPartido } = require("../db/models");

const createEstadisticaJugadorPartido = async (
  partidoId,
  tipoEstadisticaId,
  jugadorId,
  campos = {},
  transaction
) => {
  const { tiempoTranscurrido, cantidad } = campos;

  return await estadisticaJugadorPartido.create({
    tiempoTranscurrido,
    cantidad,
    partidoId,
    tipoEstadisticaId,
    jugadorId,
  });
};

module.exports = {
  createEstadisticaJugadorPartido,
};
