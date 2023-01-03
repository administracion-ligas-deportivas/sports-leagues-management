const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { usuario } = require("#src/db/models/index.js");
const { SCOPE_NAMES } = require("#src/db/scopes/usuario.js");

// 7 días - Que cada 7 días se tenga que volver a loguear.
const EXPIRE_IN_DAYS = 60 * 60 * 24 * 7;

const login = async (request, response) => {
  const { body } = request;
  const { correo, password } = body;

  const user = await usuario
    .scope(SCOPE_NAMES.withRol)
    .findOne({ where: { correo } });

  const isPasswordCorrect = async () => {
    return user === null
      ? false
      : await bcrypt.compare(password, user.password);
  };

  if (!(user && isPasswordCorrect)) {
    response.status(401).json({
      error: "Correo o contraseña incorrectos",
    });
    return;
  }

  const userForToken = {
    correo: user.correo,
    nombre: user.nombre,
    apellido: user.apellido,
    fechaNacimiento: user.fechaNacimiento,
    id: user.id,
    rol: user.rol,
  };

  // En este objeto se pueden guardar los datos obtenidos del usuario que se logueo correctamente
  const token = jwt.sign(userForToken, process.env.JWT_SECRET, {
    expiresIn: EXPIRE_IN_DAYS,
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
