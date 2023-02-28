const { SCOPE_NAMES } = require("#src/db/scopes/equipo.js");
const { getEquipoByUuid, getEquipoById } = require("./equipos");

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

const getJugadoresFromEquipo = async (equipoId) => {
  const foundEquipo = await getEquipoById(equipoId, SCOPE_NAMES.withJugadores);

  const { nombre, jugadores } = foundEquipo || {};

  return { nombre, jugadores, total: jugadores?.length };
};

module.exports = {
  inscribirJugadorEnEquipo,
  getJugadoresFromEquipo,
};
