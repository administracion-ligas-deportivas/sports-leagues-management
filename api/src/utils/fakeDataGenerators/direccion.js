import { faker } from "@faker-js/faker";
import { municipio } from "../../db/models.js";

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

export { getRandomDireccion };
