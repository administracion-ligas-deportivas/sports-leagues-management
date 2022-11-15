const { comentariosRouter } = require("./comentarios");
const { likesRouter } = require("./likes");
const { loginRouter } = require("./login");
const { postsRouter } = require("./posts");
const { usersRouter } = require("./usuarios");

module.exports = {
  comentariosRouter,
  likesRouter,
  loginRouter,
  postsRouter,
  usersRouter,
};
