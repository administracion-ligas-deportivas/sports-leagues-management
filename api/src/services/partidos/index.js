// const { partidosRepository } = require('../../repositories/partidos');
const partidos = require("./partidos");
const equipos = require("./equipos");

const partidosService = {
  ...partidos,
  ...equipos,
};

module.exports = { partidosService };
