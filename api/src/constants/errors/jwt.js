const JWT_ERROR_HANDLERS = {
  CastError: (res) => res.status(400).send({ error: "Malformatted ID" }),

  ValidationError: (res, { message }) =>
    res.status(409).send({ error: message }),

  JsonWebTokenError: (res) => res.status(401).json({ error: "Invalid Token" }),

  // Podemos saber que es un token válido, pero expirado. De esta manera incluso
  // podríamos permitir ciertas acciones a usuarios que hayan estado logueados,
  // pero su sesión haya expirado.
  TokenExpiredError: (res) => res.status(401).json({ error: "Token expired" }),
};

module.exports = { JWT_ERROR_HANDLERS };
