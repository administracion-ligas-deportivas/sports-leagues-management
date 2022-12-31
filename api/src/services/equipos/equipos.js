const { equipo } = require("#src/db/models/index.js");

const getAllEquipos = async () => {
  return await equipo.findAll();
};

const getEquipoById = async (equipoId) => {
  return await equipo.scope("includeEverything").findByPk(equipoId);
};

module.exports = {
  getAllEquipos,
  getEquipoById,
};
