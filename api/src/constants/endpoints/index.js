const { canchas } = require("./canchas");
const { eventos } = require("./eventos");
const { usuarios } = require("./usuarios");
const { deportes } = require("./deportes");
const { deportivos } = require("./deportivos");
const { equipos } = require("./equipos");

const ENDPOINTS = {
  canchas,
  eventos,
  usuarios,
  deportes,
  deportivos,
  equipos,
};

module.exports = { ENDPOINTS };
