const { equipo } = require("#src/db/models/index.js");
const { SCOPE_NAMES } = require("#src/db/scopes/equipo.js");
const { Op } = require("sequelize");

const getAllEquipos = async () => {
  return await equipo
    .scope(SCOPE_NAMES.withNumberOfJugadores, SCOPE_NAMES.includeEverything)
    .findAll();
};

const getEquipoById = async (equipoId, ...scopes) => {
  const scopesToInclude = scopes.length
    ? scopes
    : SCOPE_NAMES.includeEverything;

  return await equipo.scope(scopesToInclude).findByPk(equipoId);
};

const getEquiposByIds = async (equiposIds) => {
  const foundEquipos = await equipo.findAll({
    where: { id: { [Op.or]: equiposIds } },
  });

  const notFoundIds = equiposIds.filter(
    (equipoId) => !foundEquipos.some((equipo) => equipo.id === equipoId)
  );

  return {
    foundEquipos,
    notFoundIds,
  };
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

const areEquiposTheSame = (local, visitante) => {
  const { id: localId } = local ?? {};
  const { id: visitanteId } = visitante ?? {};

  // console.log({ local, visitante });

  return localId === visitanteId;
};

module.exports = {
  getAllEquipos,
  getEquipoById,
  getEncargadoEquipo,
  isUsuarioEncargadoEquipo,
  getEquiposByIds,
  areEquiposTheSame,
};
