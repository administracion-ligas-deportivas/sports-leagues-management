const bcrypt = require("bcrypt");
const { Usuario } = require("../models");

const getUsers = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
};

const createUser = async (req, res) => {
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
};

const verifyUser = (req, res) => {
  const { user } = req;

  res.json({
    message: "Se ha validado la sesión del usuario correctamente",
    user,
  });
};

const getUserById = async (req, res) => {
  const { userId } = req.params;

  Usuario.findByPk(userId, {
    attributes: {
      exclude: ["password"],
    },
  })
    .then((user) => {
      if (user) return res.json(user);
      res.status(404).end();
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports = {
  getUsers,
  createUser,
  verifyUser,
  getUserById,
};
