const equipos = require("./equipos");
const eventos = require("./eventos");

const equiposService = {
  ...equipos,
  ...eventos,
};

module.exports = { equiposService };
