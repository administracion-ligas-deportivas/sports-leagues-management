const { canchas } = require("./canchas");
const { eventos } = require("./eventos");
const { usuarios } = require("./usuarios");
const { deportes } = require("./deportes");

const ENDPOINTS = {
  canchas,
  eventos,
  usuarios,
  deportes,
};

module.exports = { ENDPOINTS };
