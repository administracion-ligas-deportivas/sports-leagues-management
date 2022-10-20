const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const loginRouter = require("express").Router();
const { Usuario } = require("../models");

loginRouter.post("/", async (request, response) => {
  const { body } = request;
  const { correo, password } = body;

  const user = await Usuario.findOne({ where: { correo } });

  const isPasswordCorrect =
    user === null ? false : await bcrypt.compare(password, user.password);

  if (!(user && isPasswordCorrect)) {
    response.status(401).json({
      error: "Correo o contraseña incorrectos",
    });
    return;
  }

  // 7 días - Que cada 7 días se tenga que volver a loguear.
  const expiresIn = 60 * 60 * 24 * 7;
  const userForToken = {
    correo: user.correo,
    nombre: user.nombre,
    apellido: user.apellido,
    id: user.id,
  };

  //En este objeto se pueden guardar los datos obtenidos del usuario que se logueo correctamente
  const token = jwt.sign(userForToken, process.env.SECRET, {
    expiresIn,
  });

  // Status code default: 200
  response.send({
    token,
    ...userForToken,
  });
});

module.exports = loginRouter;
