const jwt = require("jsonwebtoken");

const userAuthenticator = (req, res, next) => {
  const { token } = req;

  // 7 días - Que cada 7 días se tenga que volver a loguear.
  const expiresIn = 60 * 60 * 24 * 7;

  const decodedToken = jwt.verify(token, process.env.SECRET, {
    expiresIn,
  });

  if (!token || !decodedToken.id) {
    return res
      .status(401)
      .json({ error: "El token no se encuentra o no es válido" });
  }

  const { id } = decodedToken;

  // Con Express podemos mutar el objeto request.
  req.user = { id };

  // Con next() continuamos la ejecución del middleware.
  next();
};

module.exports = {
  userAuthenticator,
};
