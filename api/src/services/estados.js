const {
  estado: estadoModel,
  municipio: municipioModel,
} = require("#src/db/models/index.js");

// const estadosObj = Object.entries(estados.estados)
// .map(([nombreEstado, municipiosArray]) => {
//   return { nombre: nombreEstado, municipios: municipiosArray }
// })
const registrarEstados = async (estados, transaction) => {
  return await Promise.all(
    estados.map(async ({ nombre, municipios }) => {
      const municipiosObj = municipios.map((municipio) => ({
        nombre: municipio,
      }));

      return estadoModel.create(
        {
          nombre,
          municipios: municipiosObj,
        },
        {
          transaction,
          include: [{ model: municipioModel }],
        }
      );
    })
  );
};

const deleteEstados = async (transaction) => {
  return Promise.all([
    municipioModel.destroy({ where: {}, transaction }),
    estadoModel.destroy({ where: {}, transaction }),
  ]);
};

const estadosService = { registrarEstados, deleteEstados };

module.exports = {
  estadosService,
};
