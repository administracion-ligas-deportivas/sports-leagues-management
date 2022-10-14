const bcrypt = require("bcrypt");
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

  // Status code default: 200
  response.send({
    correo: user.correo,
    id: user.id,
    nombre: user.nombre,
  });
});

module.exports = loginRouter;
