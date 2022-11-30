const {
  eventoDeportivo,
  formatoEventoDeportivo,
  deporte,
  equipo,
} = require("../db/models");

const createEvento = async (req, res) => {
  const { eventoId } = req.params;
  const { body } = req;
  const { uuid, ...rest } = body;

  const newEvento = await eventoDeportivo.create(
    { ...rest },
    {
      where: {
        id: eventoId,
      },
    }
  );

  res.json(newEvento);
};

const getEventos = async (req, res) => {
  const eventos = await eventoDeportivo.findAll({
    include: [
      {
        model: formatoEventoDeportivo,
      },
      {
        model: equipo,
      },
    ],
  });
  return res.json(eventos);
};

const getEventoById = async (req, res) => {
  const { eventoId } = req.params;
  const eventos = await eventoDeportivo.findByPk(eventoId, {
    include: [
      {
        model: formatoEventoDeportivo,
      },
      {
        model: equipo,
      },
    ],
  });
  res.json(eventos);
};

const deleteEvento = async (req, res) => {
  const { eventoId } = req.params;

  await eventoDeportivo.destroy({
    where: {
      id: eventoId,
    },
  });

  res.status(204).end();
};

module.exports = {
  createEvento,
  getEventos,
  getEventoById,
  deleteEvento,
};
