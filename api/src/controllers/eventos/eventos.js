const { eventoDeportivo } = require("#src/db/models/index.js");
const { eventoService } = require("#src/services/index.js");

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
  const eventos = await eventoService.getEventos();

  return res.json({
    total: eventos.length,
    eventos,
  });
};

const getEventoById = async (req, res) => {
  const { eventoId } = req.params;

  const evento = await eventoService.getEventoById(eventoId);

  // https://stackoverflow.com/questions/11746894/what-is-the-proper-rest-response-code-for-a-valid-request-but-an-empty-data
  if (!evento) {
    // https://stackoverflow.com/questions/29555290/what-is-the-difference-between-res-end-and-res-send
    return res.status(404).end();
  }

  res.json(evento);
};

const deleteEvento = async (req, res) => {
  const { eventoId } = req.params;

  const wasDeleted = await eventoDeportivo.destroy({
    where: {
      id: eventoId,
    },
  });

  if (!wasDeleted) {
    return res.status(404).end();
  }

  res.status(204).end();
};

module.exports = {
  createEvento,
  getEventos,
  getEventoById,
  deleteEvento,
};
