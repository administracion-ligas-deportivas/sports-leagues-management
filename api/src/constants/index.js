const auth = require("./auth");
const deportes = require("./deportes");
const endpoints = require("./endpoints");
const errors = require("./errors");
const eventos = require("./eventos");
const pagos = require("./pagos");
const sequelize = require("./sequelize");
const partidos = require("./partidos");
const roles = require("./roles");
const routes = require("./routes");
const usuarios = require("./usuarios");

module.exports = {
  ...auth,
  ...deportes,
  ...endpoints,
  ...errors,
  ...eventos,
  ...pagos,
  ...partidos,
  ...roles,
  ...routes,
  ...sequelize,
  ...usuarios,
};
