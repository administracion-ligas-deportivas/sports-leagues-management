const { eventoDeportivo } = require("#src/db/models/index.js");
const { eventoService } = require("#src/services/eventos/index.js");

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

const getPartidosFromEvento = async (req, res) => {
  const { eventoId } = req.params;

  const partidos = await eventoService.getPartidosFromEvento(eventoId);

  if (!partidos?.length) {
    return res.status(404).end();
  }

  res.json({
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

const getEquiposFromEvento = async (req, res) => {
  const { eventoId } = req.params;
  const equipos = await eventoService.getEquiposFromEvento(eventoId);

  if (!equipos?.length) {
    return res.status(404).end();
  }

  res.json({
    total: equipos.length,
    equipos,
  });
};

const getEstadisticosFromEvento = async (req, res) => {
  const { eventoId } = req.params;
  const estadisticos = await eventoService.getEstadisticosFromEvento(eventoId);

  if (!estadisticos?.length) {
    return res.status(404).end();
  }

  res.json({
    total: estadisticos.length,
    estadisticos,
  });
};

module.exports = {
  createEvento,
  getEventos,
  getEventoById,
  deleteEvento,
  getPartidosFromEvento,
  getFormatoEvento,
  getEquiposFromEvento,
  getEstadisticosFromEvento,
};
