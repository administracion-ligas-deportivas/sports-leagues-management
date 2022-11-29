const { faker } = require("@faker-js/faker");

const { deportivo } = require("../../db/models");
const { getRandomDireccion } = require("./direccion");
const { getTimeStamps } = require("./timestamps");

let numberOfMunicipios = null;
let deportivoIds = null;

const resetData = async () => {
  numberOfMunicipios = null;
  deportivoIds = null;
  await initDbData();
};

const initDbData = async () => {
  deportivoIds ??= await deportivo
    .findAll({
      attributes: ["id"],
    })
    .then((deportivo) => {
      return deportivo.map((deportivo) => deportivo.id);
    });

  // console.log({ numberOfMunicipios, deportivoIds });

  return { deportivoIds, numberOfMunicipios };
};

const createRandomDeportivo = async () => {
  const timestamps = getTimeStamps(false);

  const {
    codigoPostal,
    numeroExterior,
    numeroInterior,
    municipioId,
    ...restDireccion
  } = await getRandomDireccion();

  const deportivo = {
    nombre: faker.name.fullName(),
    codigo_postal: codigoPostal,
    numero_exterior: numeroExterior,
    numero_interior: numeroInterior,
    municipio_id: municipioId,
    ...restDireccion,
    ...timestamps,
  };

  return deportivo;
};

const createRandomCancha = async (deportivoId) => {
  const timestamps = getTimeStamps(false);

  const cancha = {
    nombre: faker.name.fullName(),
    numero: faker.random.numeric(3),
    descripcion: faker.lorem.paragraph(),
    deportivo_id: deportivoId ?? faker.helpers.arrayElement(deportivoIds),
    ...timestamps,
  };

  return cancha;
};

module.exports = {
  createRandomDeportivo,
  createRandomCancha,
  initDbData,
  resetData,
};
