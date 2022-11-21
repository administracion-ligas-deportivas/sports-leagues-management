const { faker } = require("@faker-js/faker");
const { GENEROS } = require("../../constants/usuarios");

const createRandomAddress = (usuarioId) => {
  const numeroInterior = faker.datatype.boolean() || faker.random.number();

  const address = {
    calle: faker.address.streetName(),
    colonia: faker.address.streetAddress(),
    street: faker.address.streetName(),
    municipioId: faker.random.number({ min: 1, max: 32 }),
    state: faker.address.state(),
    codigoPostal: faker.address.zipCode(),
    numeroExterior: faker.random.number({ min: 1, max: 1000 }),
    numeroInterior,
    usuarioId,
  };

  return address;
};

const createRandomUser = () => {
  const genero = faker.helpers.arrayElement(Object.values(GENEROS));

  const user = {
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    correo: faker.internet.email(),
    fechaNacimiento: faker.date.birthdate(),
    genero,
    password: faker.internet.password(),
    telefono: faker.phone.number("##########"),
    createdAt: faker.date.past(),
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
