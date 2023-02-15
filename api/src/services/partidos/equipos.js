const partido = require("#src/db/models/index.js");

const existePartidoPorId = async (id) => {
  const partidoExist = await partido.findByPk(id);
  return partidoExist !== null;
};

module.exports = {
  existePartidoPorId,
};
