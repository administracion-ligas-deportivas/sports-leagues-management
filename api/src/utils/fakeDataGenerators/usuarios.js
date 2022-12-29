import { faker } from "@faker-js/faker";
import { GENEROS } from "../../constants/usuarios.js";
import { getOnlyDate } from "../date.js";
import { getRolIds } from "../../services/rol.js";
import { getTimeStamps } from "./timestamps.js";
import { municipio } from "../../db/models.js";
import { SALT_ROUNDS } from "../../constants/auth.js";
import bcrypt from "bcrypt";
import { getRandomDireccion } from "./direccion.js";

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

  return { ...user, ...caseProps };
};

export { createRandomUser, createRandomDomicilioUsuario, initDbData };
