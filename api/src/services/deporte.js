const { deporte } = require("../db/models");

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
