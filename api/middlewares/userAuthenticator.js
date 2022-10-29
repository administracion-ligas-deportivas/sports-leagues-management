const jwt = require("jsonwebtoken");

const userAuthenticator = (req, res, next) => {
  const { token } = req;
  console.log(
    "🚀 ~ file: userAuthenticator.js ~ line 5 ~ userAuthenticator ~ token",
    token
  );

  const decodedToken = jwt.verify(token, process.env.SECRET);
  console.log(
    "🚀 ~ file: userAuthenticator.js ~ line 8 ~ userAuthenticator ~ decodedToken",
    decodedToken
  );

  if (!token || !decodedToken.id) {
    return res
      .status(401)
      .json({ error: "El token no se encuentra o no es válido" });
  }

  const { id, correo, nombre, apellido } = decodedToken;

  // Con Express podemos mutar el objeto request.
  req.user = { id, correo, nombre, apellido };

  // Con next() continuamos la ejecución del middleware.
  next();
};

module.exports = {
  userAuthenticator,
};
