const { eventosService } = require("#src/services/index.js");

const requiredEventoId = (req, res, next) => {
  const { eventoId } = req.params;

  if (!eventoId) {
    return res.status(400).json({
      error: "eventoId es requerido",
    });
  }

  const id = Number(eventoId);

  console.log({ eventoId, id });

  if (!Number.isInteger(id)) {
    return res.status(400).json({
      error: "eventoId debe ser un número",
    });
  }

  next();
};

const eventoExists = async (req, res, next) => {
  const eventoId = req.params?.eventoId ?? req.body?.eventoId;

  console.log({ eventoId });

  const evento = await eventosService.getEventoById(eventoId);

  if (!evento) {
    return res.status(404).json({
      message: "El evento no existe.",
    });
  }

  req.evento = evento;

  next();
};

module.exports = {
  requiredEventoId,
  eventoExists,
};
