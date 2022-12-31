const { JWT_ERROR_HANDLERS } = require("#src/constants/errors/jwt.js");
const {
  SEQUELIZE_ERROR_HANDLERS,
} = require("#src/constants/errors/sequelize.js");

// https://www.youtube.com/watch?v=btW1SefZf9M&t=473s
const ERROR_HANDLERS = {
  ...JWT_ERROR_HANDLERS,
  ...SEQUELIZE_ERROR_HANDLERS,
  SyntaxError: (res) =>
    res
      .status(400)
      .json({
        error:
          "No se ha podido procesar la petición. Ha ocurrido un error de sintaxis.",
      })
      .end(),
  defaultError: (res) => res.status(500).end(),
};

const errorHandler = (error, req, res, next) => {
  const handler = ERROR_HANDLERS?.[error.name] || ERROR_HANDLERS.defaultError;

  handler(res, error);

  // https://fullstackopen.com/es/part3/validacion_y_es_lint
  // Si mandamos next, el error se pasa al siguiente middleware, pero se termina
  // el programa en este caso.7
  next(error);
};

module.exports = { errorHandler };
