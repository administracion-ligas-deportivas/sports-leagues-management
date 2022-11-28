const { faker } = require("@faker-js/faker");
const { GENEROS } = require("../../constants/usuarios");
const { getOnlyDate } = require("../date");

const createRandomAddress = (usuarioId) => {
  const numeroInterior = faker.datatype.boolean() && faker.random.numeric(5);

  const address = {
    calle: faker.address.street(),
    colonia: faker.address.streetAddress(),
    codigo_postal: faker.address.zipCode("#####"),
    numero_exterior: faker.random.numeric(5),
    numero_interior: numeroInterior,
    municipio_id: faker.datatype.number({ min: 1, max: 32 }),
    usuario_id: usuarioId,
    created_at: faker.date.past(),
    updated_at: new Date(Date.now()),
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
    // domicilio_usuario: domicilioUsuario,
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
