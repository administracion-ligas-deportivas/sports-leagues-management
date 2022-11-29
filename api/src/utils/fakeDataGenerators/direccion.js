const { faker } = require("@faker-js/faker");
const { municipio } = require("../../db/models");

const getRandomDireccion = async () => {
  const numberOfMunicipios = await municipio.count();
  const lastMunicipioIndex = numberOfMunicipios - 1;

  const municipioId = faker.datatype.number({
    min: 0,
    max: lastMunicipioIndex,
  });

  const numeroInterior = faker.datatype.boolean()
    ? faker.random.numeric(5)
    : null;

  return {
    calle: faker.address.street(),
    colonia: faker.address.streetAddress(),
    codigoPostal: faker.address.zipCode("#####"),
    numeroExterior: faker.random.numeric(5),
    numeroInterior,
    municipioId,
  };
};

module.exports = {
  getRandomDireccion,
};
