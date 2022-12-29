import { JWT_ERROR_HANDLERS } from "../constants/errors/jwt.js";
import { SEQUELIZE_ERROR_HANDLERS } from "../constants/errors/sequelize.js";

// https://www.youtube.com/watch?v=btW1SefZf9M&t=473s
const ERROR_HANDLERS = {
  ...JWT_ERROR_HANDLERS,
  ...SEQUELIZE_ERROR_HANDLERS,

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

export { errorHandler };
