const { faker } = require("@faker-js/faker");
const { GENEROS } = require("../../constants/usuarios");
const { getOnlyDate } = require("../date");
const { getRolIds } = require("../../services/rol");
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

const createRandomUser = async (
  generateRandomPassword = false,
  props = {},
  { isCamelCase = false } = {}
) => {
  const genero = faker.helpers.arrayElement(Object.values(GENEROS));
  const rolId = faker.helpers.arrayElement(rolIds || []);
  const timestamps = getTimeStamps(false);
  const fechaNacimiento = getOnlyDate(faker.date.birthdate());

  const password = generateRandomPassword
    ? faker.internet.password()
    : FIXED_PASSWORD;

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  const user = {
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    correo: faker.internet.email(),
    genero,
    // Generamos una contraseña que sepamos para iniciar sesión.
    password: passwordHash,
    telefono: faker.phone.number("##########"),
    ...timestamps,
    ...props,
  };

  const caseProps = isCamelCase
    ? {
        fechaNacimiento,
        rolId,
      }
    : {
        fecha_nacimiento: fechaNacimiento,
        rol_id: rolId,
      };

  console.log({ user });

  return { ...user, ...caseProps };
};

module.exports = {
  createRandomUser,
  createRandomDomicilioUsuario,
  initDbData,
};
