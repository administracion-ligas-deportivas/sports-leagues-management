const { tipoEventoDeportivo } = require("../db/models");

const getTipoEventoByNombre = async (nombre) => {
  return await tipoEventoDeportivo.findOne({
    where: {
      nombre,
    },
  });
};

module.exports = {
  getTipoEventoByNombre,
};
