const { equipo } = require("../db/models");

const getEquipos = async (req, res) => {
  const equipos = await equipo.findAll();
  return res.json(equipos);
};

const getEquipoById = async (req, res) => {
  const { equipoId } = req.params;
  const equipos = await equipo.findByPk(equipoId);
  return res.json(equipos);
};

module.exports = {
  getEquipos,
  getEquipoById,
};
