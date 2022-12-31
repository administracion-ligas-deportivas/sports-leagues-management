const { partido } = require("#src/db/models/index.js");
const { partidosService } = require("#src/services/index.js");

const createPartido = async (req, res, next) => {
  const { eventoId } = req.params;
  const { body } = req;

  try {
    const createdPartido = await partidosService.createPartido(eventoId, body);

    console.log("🚀 ~ file: partidos.js:10 ~ createPartido ~ createdPartido", {
      createdPartido,
    });

    res.json(createdPartido);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

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
  createPartido,
  getPartidos,
  getPartidoById,
  deletePartido,
};
