const bcrypt = require("bcrypt");
const {
  usuario,
  domicilioUsuario: domicilioUsuarioModel,
} = require("../db/models");

const getUsers = async (req, res) => {
  const usuarios = await usuario.findAll();
  res.json(usuarios);
};

const createUser = async (req, res) => {
  const { body } = req;
  const { domicilio, password, ...rest } = body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  try {
    const user = await usuario.create(
      {
        ...rest,
        password: passwordHash,
        domicilioUsuario: domicilio,
      },
      {
        include: [{ model: domicilioUsuarioModel }],
      }
    );

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

  usuario
    .findByPk(usuarioId, {
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
