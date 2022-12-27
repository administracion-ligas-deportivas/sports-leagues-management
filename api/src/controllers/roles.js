const { rol } = require("../db/models");

const getRoles = async (req, res) => {
  const roles = await rol.findAll();
  return res.json(roles);
};

const getRolId = async (req, res) => {
  const { rolId } = req.params;
  const rolObteined = await rol.findByPk(rolId);

  return res.json(rolObteined);
};

const createRol = async (req, res) => {
  const { body: rolUsuario } = req;

  try {
    const rolCreado = await rol.create(rolUsuario);

    res.status(201).json(rolCreado);
  } catch (error) {
    console.log({ error });

    return res.status(400).json({ error: "No se ha podido crear el rol" });
  }
};

const deleteRol = async (req, res) => {
  const { rolId } = req.params;

  await rol.destroy({
    where: {
      id: rolId,
    },
  });

  res.status(204).end();
};

module.exports = {
  getRolId,
  getRoles,
  createRol,
  deleteRol,
};