const { faker } = require("@faker-js/faker");
const { cancha } = require("#src/db/models/index.js");

const getRandomCancha = async () => {
  const canchas = await cancha.findAll();
  return faker.helpers.arrayElement(canchas);
};

module.exports = {
  getRandomCancha,
};
