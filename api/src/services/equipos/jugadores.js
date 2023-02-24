const { getEquipoByUuid } = require("./equipos");

/**
 *
 * @param {String} equipoUuid UUID del equipo.
 * @param {String} jugadorId ID del jugador.
 * @returns {Promise<Array<JugadorEquipo>>} Jugadores inscritos exitosamente.
 */
const inscribirJugadorEnEquipo = async (equipoUuid, jugadorId) => {
  const foundEquipo = await getEquipoByUuid(equipoUuid);

  return await foundEquipo.addJugador(jugadorId);
};

module.exports = {
  inscribirJugadorEnEquipo,
};
