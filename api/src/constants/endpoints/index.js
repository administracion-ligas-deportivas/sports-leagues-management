const { canchas } = require("./canchas");
const { eventos } = require("./eventos");
const { usuarios } = require("./usuarios");
const { deportes } = require("./deportes");
const { deportivos } = require("./deportivos");

const ENDPOINTS = {
  canchas,
  eventos,
  usuarios,
  deportes,
  deportivos,
};

module.exports = { ENDPOINTS };
