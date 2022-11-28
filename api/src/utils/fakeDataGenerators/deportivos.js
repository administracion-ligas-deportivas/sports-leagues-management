const { faker } = require("@faker-js/faker");

const { municipio, deportivo } = require("../../db/models");
const { getTimeStamps } = require("./timestamps");

let numberOfMunicipios = null;
let deportivoIds = null;

const resetData = async () => {
  numberOfMunicipios = null;
  deportivoIds = null;
  await initDbData();
};

const initDbData = async () => {
  numberOfMunicipios ??= await municipio.count();

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
  const { createdAt, updatedAt } = getTimeStamps();

  const numeroInterior = faker.datatype.boolean()
    ? faker.random.numeric(5)
    : null;

  const deportivo = {
    nombre: faker.name.fullName(),
    calle: faker.address.street(),
    colonia: faker.address.streetAddress(),
    codigo_postal: faker.address.zipCode("#####"),
    numero_exterior: faker.random.numeric(5),
    numero_interior: numeroInterior,
    municipio_id: faker.datatype.number({
      min: 0,
      max: numberOfMunicipios - 1,
    }),
    created_at: createdAt,
    updated_at: updatedAt,
  };

  return deportivo;
};

const createRandomCancha = async (deportivoId) => {
  const { createdAt, updatedAt } = getTimeStamps();
  console.log({ deportivoIdsInCancha: deportivoIds });

  const cancha = {
    nombre: faker.name.fullName(),
    numero: faker.random.numeric(3),
    descripcion: faker.lorem.paragraph(),
    deportivo_id: deportivoId ?? faker.helpers.arrayElement(deportivoIds),
    created_at: createdAt,
    updated_at: updatedAt,
  };

  return cancha;
};

const createRandomElements = async (element = "deportivos", length) => {
  return Promise.all(
    Array.from({ length }).map(async () => {
      const method =
        element === "deportivos" ? createRandomDeportivo : createRandomCancha;
      return await method();
    })
  );
};

module.exports = {
  createRandomDeportivo,
  createRandomCancha,
  createRandomElements,
  initDbData,
  resetData,
};
