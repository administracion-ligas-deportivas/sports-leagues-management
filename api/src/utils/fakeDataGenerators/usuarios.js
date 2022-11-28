const { faker } = require("@faker-js/faker");
const { GENEROS } = require("../../constants/usuarios");
const { getOnlyDate } = require("../date");

const createRandomAddress = () => {
  const numeroInterior = faker.datatype.boolean() && faker.random.numeric(5);

  const address = {
    calle: faker.address.street(),
    colonia: faker.address.streetAddress(),
    codigoPostal: faker.address.zipCode(),
    numeroExterior: faker.random.numeric(5),
    numeroInterior,
    municipioId: faker.datatype.number({ min: 1, max: 32 }),
  };

  return address;
};

const createRandomUser = () => {
  const genero = faker.helpers.arrayElement(Object.values(GENEROS));
  // const domicilioUsuario = createRandomAddress();

  const user = {
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    correo: faker.internet.email(),
    fecha_nacimiento: getOnlyDate(faker.date.birthdate()),
    genero,
    password: faker.internet.password(),
    telefono: faker.phone.number("##########"),
    created_at: faker.date.past(),
    updated_at: new Date(Date.now()),
    // domicilioUsuario,
  };

  return user;
};

const createRandomUsers = (usersNumber) => {
  return Array.from({ length: usersNumber }).map(() => {
    return createRandomUser();
  });
};

module.exports = {
  createRandomUser,
  createRandomUsers,
  createRandomAddress,
};
