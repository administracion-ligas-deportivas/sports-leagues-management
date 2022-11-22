const { deportivo, cancha } = require("../db/models");

const getDeportivos = async (req, res) => {
  const deportivos = await deportivo.findAll();
  return res.json(deportivos);
};

const getDeportivoById = async (req, res) => {
  const { deportivoId } = req.params;
  const deportivos = await deportivo.findByPk(deportivoId);

  return res.json(deportivos);
};

const createDeportivos = async (req, res) => {
  const { deportivos } = req.body;

  const deportivosCreados = await deportivo.bulkCreate(deportivos);
  res.json(deportivosCreados);
};

const createDeportivo = async (req, res) => {
  const { municipioId, ...rest } = req.body;

  if (!municipioId) {
    return res.status(400).json({ error: "Falta el municipio" });
  }

  const deportivoCreado = await deportivo.create({ municipioId, ...rest });
  res.json(deportivoCreado);
};

const deleteDeportivo = async (req, res) => {
  const { deportivoId } = req.params;

  await deportivo.destroy({
    where: {
      id: deportivoId,
    },
  });

  res.status(204).end();
};

const updateDeportivo = async (req, res) => {
  const { deportivoId } = req.params;
  const { body } = req;

  const deportivoActualizado = await deportivo.update(
    { ...body },
    {
      where: {
        id: deportivoId,
      },
    }
  );

  res.json(deportivoActualizado);
};

const createCancha = async (req, res) => {
  const { deportivoId } = req.params;
  const { nombre, numero, descripcion } = req.body;

  const newCancha = await cancha.create({
    nombre,
    numero,
    descripcion,
    deportivoId,
  });

  res.status(201).json(newCancha);
};

const getCanchasFromDeportivo = async (req, res) => {
  const { deportivoId } = req.params;

  const foundDeportivo = await deportivo.findByPk(deportivoId);
  const canchas = await foundDeportivo.getCanchas();

  res.json(canchas);
};

module.exports = {
  getDeportivos,
  getDeportivoById,
  createDeportivos,
  createDeportivo,
  deleteDeportivo,
  updateDeportivo,
  createCancha,
  getCanchasFromDeportivo,
};
