import { deporte } from "../db/models/index.js";

const getDeporteByNombre = async (nombre) => {
  return await deporte.findOne({
    where: {
      nombre,
    },
  });
};

export { getDeporteByNombre };
