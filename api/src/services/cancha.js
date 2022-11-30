const { faker } = require("@faker-js/faker");
const { cancha } = require("../db/models");

const getRandomCancha = async () => {
  const canchas = await cancha.findAll();
  return faker.helpers.arrayElement(canchas);
};

module.exports = {
  getRandomCancha,
};
