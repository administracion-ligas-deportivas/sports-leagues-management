const { faker } = require("@faker-js/faker");
const { GENEROS } = require("../../constants/usuarios");
const { getOnlyDate } = require("../date");
const { getRolIds } = require("../db/rol");
const { getTimeStamps } = require("./timestamps");
const { municipio } = require("../../db/models");
const { SALT_ROUNDS } = require("../../constants/auth");
const bcrypt = require("bcrypt");
const { getRandomDireccion } = require("./direccion");

const FIXED_PASSWORD = "holahola";

let numberOfMunicipios = null;
let rolIds = null;

const initDbData = async () => {
  numberOfMunicipios = await municipio.count();
  rolIds = await getRolIds();

  console.log({ numberOfMunicipios, rolIds });

  return { numberOfMunicipios };
};

const createRandomDomicilioUsuario = async (usuarioId) => {
  const direccion = await getRandomDireccion();

  const domicilioUsuario = {
    ...direccion,
    usuarioId,
  };

  return domicilioUsuario;
};

const createRandomUser = async (generateRandomPassword = false) => {
  const genero = faker.helpers.arrayElement(Object.values(GENEROS));
  const rolId = faker.helpers.arrayElement(rolIds);
  const timestamps = getTimeStamps(false);

  const password = generateRandomPassword
    ? faker.internet.password()
    : FIXED_PASSWORD;

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  const user = {
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    correo: faker.internet.email(),
    fecha_nacimiento: getOnlyDate(faker.date.birthdate()),
    genero,
    // Generamos una contraseña que sepamos para iniciar sesión.
    password: passwordHash,
    telefono: faker.phone.number("##########"),
    rol_id: rolId,
    ...timestamps,
  };

  return user;
};

module.exports = {
  createRandomUser,
  createRandomDomicilioUsuario,
  initDbData,
};
