const { cancha } = require("../db/models");

const getCanchas = async (req, res) => {
  const canchas = await cancha.findAll();
  return res.json(canchas);
};

const getCanchasById = async (req, res) => {
  const { canchasId } = req.params;
  const canchas = await cancha.findByPk(canchasId);
  return res.json(canchas);
};

module.exports = {
  getCanchas,
  getCanchasById,
};
