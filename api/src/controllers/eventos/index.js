const partidos = require("./partidos");
const formatos = require("./formatos");
const eventos = require("./eventos");
const estadisticos = require("./estadisticos");
const equipos = require("./equipos");

module.exports = {
  ...partidos,
  ...formatos,
  ...eventos,
  ...estadisticos,
  ...equipos,
};
