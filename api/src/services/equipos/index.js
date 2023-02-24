const equipos = require("./equipos");
const eventos = require("./eventos");
const jugadores = require("./jugadores");

const equiposService = {
  ...equipos,
  ...eventos,
  ...jugadores,
};

module.exports = { equiposService };
