const { canchasRouter } = require("./canchas");
const { deportesRouter } = require("./deportes");
const { deportivosRouter } = require("./deportivos");
const { endpointsRouter } = require("./endpoints");
const { equiposRouter } = require("./equipos");
const { estadosRouter } = require("./estados");
const { eventosRouter } = require("./eventos");
const { formatosRouter } = require("./formatoEventoDeportivo");
const { loginRouter } = require("./login");
const { meRouter } = require("./me");
const { partidosRouter } = require("./partidos");
const { rolesRouter } = require("./roles");
const { tiposDeEventoRouter } = require("./tipoEventoDeportivo");
const { usersRouter } = require("./usuarios");

module.exports = {
  canchasRouter,
  deportesRouter,
  deportivosRouter,
  endpointsRouter,
  equiposRouter,
  estadosRouter,
  eventosRouter,
  formatosRouter,
  loginRouter,
  meRouter,
  partidosRouter,
  rolesRouter,
  tiposDeEventoRouter,
  usersRouter,
};
