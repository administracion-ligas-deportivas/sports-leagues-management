const bcrypt = require("bcrypt");
const { Usuario } = require("../db/models");

const getUsers = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
};

const createUser = async (req, res) => {
  const { body } = req;
  const { nombre, apellido, correo, password, telefono } = body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  try {
    const user = await Usuario.create({
      nombre,
      apellido,
      correo,
      password: passwordHash,
      telefono,
    });

    res.status(201).json(user);
  } catch (error) {
    console.log({ error });

    return res
      .status(400)
      .json({ error: "No se ha podido registrar el usuario" });
  }
};

const verifyUser = (req, res) => {
  const { user } = req;

  res.json({
    message: "Se ha validado la sesión del usuario correctamente",
    user,
  });
};

const getUserById = async (req, res) => {
  const { usuarioId } = req.params;

  Usuario.findByPk(usuarioId, {
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
