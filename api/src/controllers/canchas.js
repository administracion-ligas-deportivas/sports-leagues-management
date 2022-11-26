const { cancha } = require("../db/models");

const getCanchas = async (req, res) => {
  const canchas = await cancha.findAll();
  return res.json(canchas);
};

const getCanchasById = async (req, res) => {
  const { canchaId } = req.params;
  const canchas = await cancha.findByPk(canchaId);

  return res.json(canchas);
};

module.exports = {
  getCanchas,
  getCanchasById,
};
