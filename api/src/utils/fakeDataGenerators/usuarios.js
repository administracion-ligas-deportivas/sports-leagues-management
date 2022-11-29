const bcrypt = require("bcrypt");
const { faker } = require("@faker-js/faker");
const { GENEROS } = require("../../constants/usuarios");
const { getOnlyDate } = require("../date");
const { SALT_ROUNDS } = require("../../constants/auth");
const { municipio, rol } = require("../../db/models");

let numberOfMunicipios = null;
let rolIds = null;

const initDbData = async () => {
  numberOfMunicipios = await municipio.count();
  rolIds = await rol.findAll({ attributes: ["id"] }).then((rol) => {
    return rol.map((rol) => rol.id);
  });

  console.log({ numberOfMunicipios, rolIds });

  return { numberOfMunicipios };
};

const createRandomAddress = async (usuarioId) => {
  const numeroInterior = faker.datatype.boolean()
    ? faker.random.numeric(5)
    : null;

  const address = {
    calle: faker.address.street(),
    colonia: faker.address.streetAddress(),
    codigoPostal: faker.address.zipCode("#####"),
    numeroExterior: faker.random.numeric(5),
    numeroInterior,
    municipioId: faker.datatype.number({ min: 0, max: numberOfMunicipios - 1 }),
    usuarioId,
    createdAt: faker.date.past(),
    updatedAt: new Date(Date.now()),
  };

  return address;
};

const createRandomUser = async () => {
  const genero = faker.helpers.arrayElement(Object.values(GENEROS));

  const password = "holahola";
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
  const rolId = faker.helpers.arrayElement([...rolIds]);
  // const domicilioUsuario = createRandomAddress();

  const user = {
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    correo: faker.internet.email(),
    fecha_nacimiento: getOnlyDate(faker.date.birthdate()),
    genero,
    // Generamos una contraseña que sepamos para iniciar sesión.
    password: passwordHash,
    // password: faker.internet.password(),
    telefono: faker.phone.number("##########"),
    created_at: faker.date.past(),
    updated_at: new Date(Date.now()),
    rol_id: rolId,
    // domicilio_usuario: domicilioUsuario,
  };

  return user;
};

const createRandomUsers = async (usersNumber) => {
  return Promise.all(
    Array.from({ length: usersNumber }).map(async () => {
      return await createRandomUser();
    })
  );
};

module.exports = {
  createRandomUser,
  createRandomUsers,
  createRandomAddress,
  initDbData,
};
