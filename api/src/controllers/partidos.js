const { partido } = require("#src/db/models/index.js");

const getPartidos = async (req, res) => {
  const partidos = await partido.findAll();
  return res.json(partidos);
};

const getPartidoById = async (req, res) => {
  const { partidoId } = req.params;
  const partidos = await partido.scope("withFullData").findByPk(partidoId);

  return res.json(partidos);
};

const deletePartido = async (req, res) => {
  const { partidoId } = req.params;

  await partido.destroy({
    where: {
      id: partidoId,
    },
  });

  res.status(204).end();
};

module.exports = {
  getPartidos,
  getPartidoById,
  deletePartido,
};
