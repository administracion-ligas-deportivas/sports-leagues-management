const jwt = require("jsonwebtoken");
const { usuario } = require("#src/db/models/index.js");
const { SCOPE_NAMES } = require("#src/db/scopes/usuario.js");
const { authService } = require("#src/services/index.js");
const { JWT_SECRET } = require("#src/config/index.js");
const { JWT_EXPIRATION_DATE } = require("#src/constants/auth.js");

const login = async (request, response) => {
  const { body } = request;
  const { correo, password } = body;

  const user = await usuario
    .scope(
      SCOPE_NAMES.defaultScope,
      SCOPE_NAMES.withRol,
      SCOPE_NAMES.withDomicilio
    )
    .findOne({ where: { correo } });

  const isPasswordCorrect = await authService.isPasswordCorrect(user, password);

  if (!(user && isPasswordCorrect)) {
    response.status(401).json({
      error: "Correo o contraseña incorrectos",
    });
    return;
  }

  const userForToken = user.toJSON();

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
