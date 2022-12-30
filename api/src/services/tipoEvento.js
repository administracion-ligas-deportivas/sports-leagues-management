const { tipoEventoDeportivo } = require("#src/db/models/index.js");

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
