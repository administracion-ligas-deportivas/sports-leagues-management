// const { partidosRepository } = require('../../repositories/partidos');
const partidos = require("./partidos");

const partidosService = {
  ...partidos,
};

module.exports = { partidosService };
