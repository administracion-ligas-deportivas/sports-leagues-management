const { equipo } = require("#src/db/models/index.js");

const getAllEquipos = async () => {
  return await equipo.scope("withNumberOfJugadores").findAll();
};

const getEquipoById = async (equipoId, scopes = "includeEverything") => {
  return await equipo.scope(scopes).findByPk(equipoId);
};

const getEncargadoEquipo = async (equipoId) => {
  const foundEquipo = await equipo.scope("includeEncargado").findByPk(equipoId);

  return foundEquipo?.encargado;
};

// Revisar que el ID del encargado (usuario que realizó la petición) sea el
// mismo que el del encargado del equipo.
const isUsuarioEncargadoEquipo = (usuarioId, equipo) => {
  const { encargadoEquipoId } = equipo ?? {};

  if (!encargadoEquipoId) return;

  return usuarioId === encargadoEquipoId;
};

module.exports = {
  getAllEquipos,
  getEquipoById,
  getEncargadoEquipo,
  isUsuarioEncargadoEquipo,
};
