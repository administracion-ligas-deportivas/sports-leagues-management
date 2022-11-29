const { loginRouter } = require("./login");
const { usersRouter } = require("./usuarios");
const { estadosRouter } = require("./estados");
const { deportesRouter } = require("./deportes");
const { deportivosRouter } = require("./deportivos");
const { eventosRouter } = require("./eventos");

module.exports = {
  loginRouter,
  usersRouter,
  estadosRouter,
  deportesRouter,
  deportivosRouter,
  eventosRouter,
};
