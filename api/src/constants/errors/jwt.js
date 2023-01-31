const JWT_ERROR_HANDLERS = {
  CastError: (res) => res.status(400).send({ error: "Malformatted ID" }),

  ValidationError: (res, { message }) =>
    res.status(409).send({ error: message }),

  JsonWebTokenError: (res) =>
    res.status(401).json({ error: "El token no se encuentra o no es válido" }),

  // Podemos saber que es un token válido, pero expirado. De esta manera incluso
  // podríamos permitir ciertas acciones a usuarios que hayan estado logueados,
  // pero su sesión haya expirado.
  TokenExpiredError: (res) => res.status(401).json({ error: "El token ha expirado" }),
};

module.exports = { JWT_ERROR_HANDLERS };
