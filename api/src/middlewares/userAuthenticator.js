const { JWT_SECRET } = require("#src/constants/auth.js");
const { usuario } = require("#src/db/models/index.js");
const { SCOPE_NAMES } = require("#src/db/scopes/usuario.js");
const jwt = require("jsonwebtoken");

const { defaultScope, withRol, withDomicilio } = SCOPE_NAMES;

const userAuthenticator = async (req, res, next) => {
  const { token } = req;
  let decodedToken = {};

  try {
    decodedToken = jwt.verify(token, JWT_SECRET);

    if (!token || !decodedToken.id) {
      return res
        .status(401)
        .json({ error: "El token no se encuentra o no es válido" });
    }
  } catch (error) {
    next(error);
  }

  const { iat, exp, ...userProps } = decodedToken;
  const { id } = userProps;

  try {
    // Obtener usuario actualizado. No depender del usuario que viene en el token.
    const user = await usuario
      .scope(defaultScope, withRol, withDomicilio)
      .findByPk(id);

    // console.log({ user, userProps, values: user?.dataValues });

    // Con Express podemos mutar el objeto request.
    req.user = { ...user?.dataValues };
  } catch (error) {
    next(error);
  }

  // Con next() continuamos la ejecución del middleware.
  next();
};

module.exports = {
  userAuthenticator,
};
