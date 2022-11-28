const { comentariosRouter } = require("./comentarios");
const { likesRouter } = require("./likes");
const { loginRouter } = require("./login");
const { postsRouter } = require("./posts");
const { usersRouter } = require("./usuarios");
const { estadosRouter } = require("./estados");
const { deportesRouter } = require("./deportes");
const { deportivosRouter } = require("./deportivos");
const { eventosRouter } = require("./eventos");
const { canchasRouter } = require("./canchas");
const { formatosRouter } = require("./formatoEventoDeportivo");
const { tipoEventoRouter } = require("./tipoEventoDeportivo");
const { rolRouter } = require("./roles");

module.exports = {
  comentariosRouter,
  likesRouter,
  loginRouter,
  postsRouter,
  usersRouter,
  estadosRouter,
  deportesRouter,
  deportivosRouter,
  eventosRouter,
  canchasRouter,
  formatosRouter,
  tipoEventoRouter,
  rolRouter,
};
