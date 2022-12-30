const { deporte } = require("#src/db/models/index.js");

const getDeporteByNombre = async (nombre) => {
  return await deporte.findOne({
    where: {
      nombre,
    },
  });
};

module.exports = {
  getDeporteByNombre,
};
