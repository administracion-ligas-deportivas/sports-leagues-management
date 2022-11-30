const { ROLES } = require("../constants/roles");
const { faker } = require("@faker-js/faker");
const { rol, usuario } = require("../db/models");

const getRolIds = async (transaction) => {
  return await rol
    .findAll({ attributes: ["id"], transaction })
    .then((roles) => {
      return roles.map((rol) => rol.id);
    });
};

const getOrganizadoresIds = async (transaction) => {
  const organizadores = await rol
    .findOne({
      where: {
        nombre: ROLES.ORGANIZADOR,
      },
      include: usuario,
      transaction,
    })
    .then((rol) => rol.usuarios);

  return organizadores.map((organizador) => {
    console.log({ organizador: organizador.toJSON() });
    return organizador.id;
  });
};

const getRandomOrganizadorId = async (transaction) => {
  const organizadoresIds = await getOrganizadoresIds(transaction);
  // const randomIndex = Math.floor(Math.random() * organizadoresIds.length);
  // return organizadoresIds[randomIndex];

  return faker.helpers.arrayElement(organizadoresIds);
};

module.exports = {
  getRolIds,
  getOrganizadoresIds,
  getRandomOrganizadorId,
};
