import { tipoEventoDeportivo } from "../db/models/index.js";

const getTipoEventoByNombre = async (nombre) => {
  return await tipoEventoDeportivo.findOne({
    where: {
      nombre,
    },
  });
};

export { getTipoEventoByNombre };
