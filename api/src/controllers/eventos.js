const {
  SEQUELIZE_ERROR_NAMES,
  SEQUELIZE_ERROR_HANDLERS,
} = require("../constants/errors/sequelize");
const {
  eventoDeportivo,
  formatoEventoDeportivo,
  deporte,
  equipo,
} = require("../db/models");

// Solo un usuario con el rol de organizador lo puede crear.
const createEvento = async (req, res) => {
  const { eventoId } = req.params;
  const { body } = req;
  const { formatoEventoDeportivoId, deporteId, ...rest } = body;

  console.log("🚀 ~ file: eventos.js:12 ~ createEvento ~ body", body);

  if (!formatoEventoDeportivoId && !deporteId) {
    return res.status(400).json({
      error: "No se ha especificado el formato del evento o el deporte",
    });
  }

  // Add formatoEventoDeportivoId and not deporteId if formatoEventoDeportivoId
  // was specified. Otherwise, add deporteId.
  const evento = {
    ...rest,
    formatoEventoDeportivoId,
    deporteId: formatoEventoDeportivoId ? null : deporteId,
  };

  console.log({ evento });

  try {
    const newEvento = await eventoDeportivo.create(evento, {
      where: {
        id: eventoId,
      },
    });

    if (!newEvento) {
      return res.status(500).json({
        error: "No se pudo crear el evento",
      });
    }

    res.json(newEvento);
  } catch (error) {
    const errorHandler =
      SEQUELIZE_ERROR_HANDLERS?.[error.name] ||
      SEQUELIZE_ERROR_HANDLERS.default;

    return errorHandler(res, error);
  }
};

const getEventos = async (req, res) => {
  const eventos = await eventoDeportivo.findAll({
    include: [formatoEventoDeportivo, equipo],
  });

  return res.json({
    total: eventos.length,
    eventos,
  });
};

const getEventoById = async (req, res) => {
  const { eventoId } = req.params;

  const evento = await eventoDeportivo.findByPk(eventoId, {
    include: [formatoEventoDeportivo, equipo],
  });

  // https://stackoverflow.com/questions/11746894/what-is-the-proper-rest-response-code-for-a-valid-request-but-an-empty-data
  if (!evento) {
    // https://stackoverflow.com/questions/29555290/what-is-the-difference-between-res-end-and-res-send
    return res.status(404).end();
  }

  res.json(evento);
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
