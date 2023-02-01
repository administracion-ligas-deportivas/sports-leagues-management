const { canchas } = require("./canchas");
const { deportes } = require("./deportes");
const { deportivos } = require("./deportivos");
const { equipos } = require("./equipos");
const { estadisticas } = require("./estadisticas");
const { eventos } = require("./eventos");
const { formatos } = require("./formatos");
const { login } = require("./login");
const { me } = require("./me");
const { partidos } = require("./partidos");
const { permisos } = require("./permisos");
const { roles } = require("./roles");
const { tiposDeEvento } = require("./tiposDeEvento");
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
  partidos,
  permisos,
  roles,
  tiposDeEvento,
  usuarios,
};

module.exports = { ENDPOINTS };
