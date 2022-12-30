const partidos = require("./partidos");
const formatos = require("./formatos");
const eventos = require("./eventos");
const estadisticos = require("./estadisticos");
const equipos = require("./equipos");
const pagos = require("./pagos");

const eventoService = {
  ...partidos,
  ...formatos,
  ...eventos,
  ...estadisticos,
  ...equipos,
  ...pagos,
};

module.exports = {
  eventoService,
};
