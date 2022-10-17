const express = require("express");
const usersRouter = express.Router();
const { Usuario } = require("../models");
const bcrypt = require("bcrypt");

const { validateToken } = require("../middlewares/AuthMiddleware");

usersRouter.get("/", async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
});

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

usersRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  Usuario.findByPk(id, {
    attributes: {
      exclude: ["password"],
    },
  })
    .then((user) => {
      if (user) return res.json(user);
      res.status(404).end();
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = usersRouter;
