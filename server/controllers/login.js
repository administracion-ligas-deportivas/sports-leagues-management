const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const loginRouter = require("express").Router();
const User = require("../models/Usuario");

loginRouter.post("/", async (request, response) => {
  const { body } = request;
  const { correo, password } = body;

  const user = await User.findOne({ correo });

  const isPasswordCorrect =
    user === null ? false : await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    response.status(401).json({
      error: "Correo o contraseña incorrectos",
    });
  }

  const userForToken = {
    correo: user.correo,
    id: user.id,
  };

  //En este objeto se pueden guardar los datos obtenidos del usuario que se logueo correctamente
  const accessToken = sign(userForToken, "importantSecret");

  // Status code default: 200
  response.send({
    token: accessToken,
    nombre: user.nombre,
    ...userForToken,
  });
});

module.exports = loginRouter;
