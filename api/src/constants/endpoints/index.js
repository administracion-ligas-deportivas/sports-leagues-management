const { canchas } = require("./canchas");
const { eventos } = require("./eventos");
const { usuarios } = require("./usuarios");
const { deportes } = require("./deportes");
const { deportivos } = require("./deportivos");
const { equipos } = require("./equipos");
const { estadisticas } = require("./estadisticas");

const ENDPOINTS = {
  canchas,
  eventos,
  usuarios,
  deportes,
  deportivos,
  equipos,
  estadisticas,
};

module.exports = { ENDPOINTS };
