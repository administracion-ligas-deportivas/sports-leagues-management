const { eventoDeportivo } = require("#src/db/models/index.js");
const { eventosService } = require("#src/services/index.js");

// Solo un usuario con el rol de organizador lo puede crear.
const createEvento = async (req, res, next) => {
  const { body } = req;

  try {
    const evento = await eventosService.createEvento(body);

    if (!evento) {
      return res.status(404).json({
        error: "No se ha especificado el formato del evento o el deporte",
      });
    }

    res.status(201).json(evento);
  } catch (error) {
    next(error);
  }
};

const getEventos = async (req, res) => {
  const eventos = await eventosService.getEventos();

  return res.json({
    total: eventos.length,
    eventos,
  });
};

const getEventoById = async (req, res) => {
  if (req?.evento?.data) {
    return res.json(req.evento.data);
  }

  console.log("No hay evento en `req`. Buscando en la base de datos...");

  const { eventoId } = req.params;

  const evento = await eventosService.getEventoById(eventoId);

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
