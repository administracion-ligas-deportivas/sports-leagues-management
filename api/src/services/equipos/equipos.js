const { equipo } = require("#src/db/models/index.js");
const { SCOPE_NAMES } = require("#src/db/scopes/equipo.js");

const getAllEquipos = async () => {
  return await equipo.scope(SCOPE_NAMES.withNumberOfJugadores).findAll();
};

const getEquipoById = async (equipoId, ...scopes) => {
  const scopesToInclude = scopes.length
    ? scopes
    : SCOPE_NAMES.includeEverything;

  return await equipo.scope(scopesToInclude).findByPk(equipoId);
};

const getEncargadoEquipo = async (equipoId) => {
  const foundEquipo = await equipo
    .scope(SCOPE_NAMES.withEncargado)
    .findByPk(equipoId);

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
