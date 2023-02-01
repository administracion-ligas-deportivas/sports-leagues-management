const { canchas } = require("./canchas");
const { deportes } = require("./deportes");
const { deportivos } = require("./deportivos");
const { equipos } = require("./equipos");
const { estadisticas } = require("./estadisticas");
const { eventos } = require("./eventos");
const { formatos } = require("./formatos");
const { login } = require("./login");
const { me } = require("./me");
const { usuarios } = require("./usuarios");

const ENDPOINTS = {
  canchas,
  deportes,
  deportivos,
  equipos,
  estadisticas,
  eventos,
  formatos,
  login,
  me,
  usuarios,
};

module.exports = { ENDPOINTS };
