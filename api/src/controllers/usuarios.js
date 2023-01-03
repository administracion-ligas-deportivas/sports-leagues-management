const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("#src/constants/auth.js");
const {
  usuario,
  domicilioUsuario: domicilioUsuarioModel,
} = require("#src/db/models/index.js");
const { SCOPE_NAMES } = require("#src/db/scopes/usuario.js");

const getUsers = async (req, res) => {
  const usuarios = await usuario.findAll();
  res.json(usuarios);
};

const createUser = async (req, res) => {
  const { body } = req;
  const { domicilio, password, ...rest } = body;

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

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

    if (!user?.domicilioUsuario) {
      usuario.destroy({ where: { id: user.id } });

      return res.status(500).json({
        error: "No se pudo crear el usuario",
      });
    }

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
  const { domicilio } = req.query;

  const scopes = domicilio
    ? [SCOPE_NAMES.withDomicilio, SCOPE_NAMES.withRol]
    : [];

  usuario
    .scope(scopes)
    .findByPk(usuarioId)
    .then((user) => {
      return user ? res.json(user) : res.status(404).end();
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports = {
  getUsers,
  createUser,
  verifyUser,
  getUserById,
};
