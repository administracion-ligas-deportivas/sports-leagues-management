const { loginRouter } = require("./login");
const { usersRouter } = require("./usuarios");
const { estadosRouter } = require("./estados");
const { deportesRouter } = require("./deportes");
const { deportivosRouter } = require("./deportivos");
const { eventosRouter } = require("./eventos");
const { canchasRouter } = require("./canchas");
const { formatosRouter } = require("./formatoEventoDeportivo");
const { tipoEventoRouter } = require("./tipoEventoDeportivo");
const { rolRouter } = require("./roles");
const { equiposRouter } = require("./equipos");
const { partidosRouter } = require("./partidos");

module.exports = {
  loginRouter,
  usersRouter,
  estadosRouter,
  deportesRouter,
  deportivosRouter,
  eventosRouter,
  canchasRouter,
  formatosRouter,
  tipoEventoRouter,
  rolRouter,
  equiposRouter,
  partidosRouter,
};
