// https://www.youtube.com/watch?v=btW1SefZf9M&t=473s
const ERROR_HANDLERS = {
  CastError: (res) => res.status(400).send({ error: "malformatted id" }),

  ValidationError: (res, { message }) =>
    res.status(409).send({ error: message }),

  JsonWebTokenError: (res) => res.status(401).json({ error: "invalid token" }),

  // Podemos saber que es un token válido, pero expirado. De esta manera incluso
  // podríamos permitir ciertas acciones a usuarios que hayan estado logueados,
  // pero su sesión haya expirado.
  TokenExpiredError: (res) => res.status(401).json({ error: "token expired" }),

  defaultError: (res) => res.status(500).end(),
};

const errorHandler = (error, req, res, next) => {
  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError;

  handler(res, error);

  // https://fullstackopen.com/es/part3/validacion_y_es_lint
  // Si mandamos next, el error se pasa al siguiente middleware, pero se termina
  // el programa en este caso.
  // next(error);
};

module.exports = { errorHandler };
