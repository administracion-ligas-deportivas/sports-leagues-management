const { equiposService } = require("./equipos");
const { eventosService } = require("./eventos");
const { pagosService } = require("./pagos");
const { partidosService } = require("./partidos");
const { usuariosService } = require("./usuarios");
const { authService } = require("./auth");

module.exports = {
  equiposService,
  eventosService,
  pagosService,
  partidosService,
  usuariosService,
  authService,
};
