import { deporte } from "../db/models/index.js";

const getDeportes = async (req, res) => {
  const deportes = await deporte.findAll();
  return res.json(deportes);
};

const getDeporteById = async (req, res) => {
  const { deporteId } = req.params;
  const deportes = await deporte.findByPk(deporteId);

  return res.json(deportes);
};

const createDeportes = async (req, res) => {
  const { deportes } = req.body;

  const deportesCreados = await deporte.bulkCreate(deportes);

  res.json(deportesCreados);
};

const deleteDeporte = async (req, res) => {
  const { deporteId } = req.params;

  await deporte.destroy({
    where: {
      id: deporteId,
    },
  });

  res.status(204).end();
};

export { getDeportes, getDeporteById, createDeportes, deleteDeporte };
