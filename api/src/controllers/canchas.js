import { cancha } from "../db/models/index.js";

const getCanchas = async (req, res) => {
  const canchas = await cancha.findAll();
  return res.json(canchas);
};

const getCanchasById = async (req, res) => {
  const { canchaId } = req.params;
  const canchas = await cancha.findByPk(canchaId);
  return res.json(canchas);
};

const deleteCancha = async (req, res) => {
  const { canchaId } = req.params;

  await cancha.destroy({
    where: {
      id: canchaId,
    },
  });

  res.status(204).end();
};

export { getCanchas, getCanchasById, deleteCancha };
