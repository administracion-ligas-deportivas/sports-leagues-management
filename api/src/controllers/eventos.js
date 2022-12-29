const {
  eventoDeportivo,
  formatoEventoDeportivo,
  equipo,
} = require("../db/models");

const { eventoService } = require("../services/evento");

// Solo un usuario con el rol de organizador lo puede crear.
const createEvento = async (req, res, next) => {
  const { body } = req;

  try {
    const evento = await eventoService.createEvento(body);

    if (evento?.error) {
      return res.status(evento.status).json({
        error: evento.error,
      });
    }

    res.status(201).json(evento);
  } catch (error) {
    next(error);
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

const getPartidosFromEvento = async (req, res) => {
  const { eventoId } = req.params;

  const partidos = await eventoService.getPartidosFromEvento(eventoId);

  if (!partidos?.length) {
    return res.status(404).end();
  }

  res.json({
    eventoDeportivoId: eventoId,
    total: partidos.length,
    partidos,
  });
};

const getFormatoEvento = async (req, res) => {
  const { eventoId } = req.params;

  const { evento, formatoEvento } = await eventoService.getFormatoEvento(
    eventoId
  );

  if (!evento) {
    return res.status(404).json({
      error: "No se ha encontrado el evento",
    });
  }

  if (!formatoEvento) {
    return res.status(404).json({
      error:
        "No se ha encontrado un formato para el evento. En este caso, el evento tiene un deporte.",
    });
  }

  return res.json(formatoEvento);
};

module.exports = {
  createEvento,
  getEventos,
  getEventoById,
  deleteEvento,
  getPartidosFromEvento,
  getFormatoEvento,
};
