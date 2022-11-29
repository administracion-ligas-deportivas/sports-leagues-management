const { usuario } = require("../db/models");
const { ROLES } = require("../constants/roles");
const { faker } = require("@faker-js/faker");

const getOrganizadoresIds = async () => {
  const organizadores = await usuario.findAll({
    where: {
      rol: ROLES.ORGANIZADOR.nombre,
    },
  });
  return organizadores.map((organizador) => organizador.id);
};

const getRandomOrganizadorId = async () => {
  const organizadoresIds = await getOrganizadoresIds();
  // const randomIndex = Math.floor(Math.random() * organizadoresIds.length);
  // return organizadoresIds[randomIndex];

  return faker.helpers.arrayElement(organizadoresIds);
};

module.exports = {
  getOrganizadoresIds,
  getRandomOrganizadorId,
};
