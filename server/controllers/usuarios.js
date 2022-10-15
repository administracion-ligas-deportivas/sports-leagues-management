const express = require("express");
const usersRouter = express.Router();
const { Usuario } = require("../models");
const bcrypt = require("bcrypt");

const { validateToken } = require("../middlewares/AuthMiddleware");

usersRouter.post("/", async (req, res) => {
  const { body } = req;
  const { nombre, apellido, correo, password, telefono } = body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  Usuario.create({
    nombre,
    apellido,
    correo,
    password: passwordHash,
    telefono,
  });

  res.status(201).json("Usuario registrado exitosamente");
});

usersRouter.get("/verify", validateToken, (req, res) => {
  res.json(req.user);
});

usersRouter.get("/ProfileInfo/:id", async (req, res) => {
  const profile_id = req.params.id;

  const profileInfo = await Usuario.findByPk(profile_id, {
    attributes: {
      exclude: ["password"],
    },
  });

  res.json(profileInfo);
});

module.exports = usersRouter;
