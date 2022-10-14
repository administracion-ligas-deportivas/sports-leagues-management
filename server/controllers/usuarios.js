const express = require("express");
const router = express.Router();
const { Usuario } = require("../models");
const bcrypt = require("bcrypt");

const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/", async (req, res) => {
  const { nombre, apellido, correo, password, telefono } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Usuario.create({
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      password: hash,
      telefono: telefono,
    });
  });
  res.json("Usuario registrado exitosamente");
});

router.get("/verify", validateToken, (req, res) => {
  res.json(req.user);
});

router.get("/ProfileInfo/:id", async (req, res) => {
  const profile_id = req.params.id;

  const profileInfo = await Usuario.findByPk(profile_id, {
    attributes: {
      exclude: ["password"],
    },
  });

  res.json(profileInfo);
});

module.exports = router;
