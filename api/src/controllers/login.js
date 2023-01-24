const jwt = require("jsonwebtoken");
const { usuario } = require("#src/db/models/index.js");
const { SCOPE_NAMES } = require("#src/db/scopes/usuario.js");
const { authService } = require("#src/services/index.js");
const { JWT_EXPIRATION_DATE, JWT_SECRET } = require("#src/constants/auth.js");

const { defaultScope, withRol, withDomicilio, withPasswordHash } = SCOPE_NAMES;

const login = async (request, response) => {
  const { body } = request;
  const { correo, password } = body;

  const user = await usuario
    .scope(defaultScope, withRol, withDomicilio, withPasswordHash)
    .findOne({ where: { correo } });

  const areCredentialsCorrect = await authService.areCredentialsCorrect(
    user,
    password
  );

  if (!areCredentialsCorrect) {
    response.status(401).json({
      error: "Correo o contraseña incorrectos",
    });

    return;
  }

  const { password: passwordHash, ...userForToken } = user?.dataValues ?? {};

  // En este objeto se pueden guardar los datos obtenidos del usuario que se logueo correctamente
  const token = jwt.sign(userForToken, JWT_SECRET, {
    expiresIn: JWT_EXPIRATION_DATE,
  });

  // Status code default: 200
  response.send({
    token,
    ...userForToken,
  });
};

module.exports = {
  login,
};
