const formatoMundial = require("./formatoMundial.json");
const eventoMundial = require("./eventoMundial.json");
const argentina = require("./argentina.json");
const mexico = require("./mexico.json");
const estadisticasMexicoVsArgentina = require("./estadisticasMexicoVsArgentina.json");

const equipos = [argentina, mexico];

module.exports = {
  formatoMundial,
  eventoMundial,
  equipos,
  estadisticasMexicoVsArgentina,
};
