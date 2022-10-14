const express = require("express");
const router = express.Router();
const { Usuario } = require("../models");
const bcrypt = require("bcrypt");

const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/", async (req, res) => {
  const { nombre, apellido, correo, password, telefono } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Usuario.create({
      nombre: nombre,
      apellido: apellido,
      email: correo,
      password: hash,
      telefono: telefono,
    });
  });
  res.json("Usuario registrado exitosamente");
});

router.post("/login", async (req, res) => {
  const { correo, password } = req.body;
  //Crear consulta para verificar si existe el usuario
  const usuarioCheck = await Usuario.findOne({ where: { email: correo } });
  console.log(
    "🚀 ~ file: Usuarios.js ~ line 27 ~ router.post ~ usuarioCheck",
    usuarioCheck
  );

  if (!usuarioCheck) {
    console.log(
      "🚀 ~ file: Usuarios.js ~ line 33 ~ router.post ~ !usuarioCheck",
      !usuarioCheck
    );
    res.json({ error: "Usuario o contraseña incorrectos" });
    return;
  }

  bcrypt.compare(password, usuarioCheck.password).then((coinciden) => {
    if (!coinciden) res.json("Usuario o contraseña incorrectos");

    //En este objeto se pueden guardar los datos obtenidos del usuario que se logueo correctamente
    const accessToken = sign(
      {
        userEmail: usuarioCheck.email,
        id: usuarioCheck.id,
        nombre: usuarioCheck.nombre,
      },
      "importantSecret"
    );
    res.json({
      token: accessToken,
      correo: usuarioCheck.email,
      id: usuarioCheck.id,
      nombre: usuarioCheck.nombre,
    });
  });
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
