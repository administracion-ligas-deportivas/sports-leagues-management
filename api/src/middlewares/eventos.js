const { SCOPE_NAMES } = require("#src/db/scopes/eventoDeportivo.js");
const { eventosService } = require("#src/services/index.js");

const {
  generalData,
  withNumberOfPartidos,
  withFormato,
  withNumberOfEstadisticos,
  withNumberOfEquipos,
} = SCOPE_NAMES;

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
  const scopes = [
    generalData,
    withFormato,
    // Si lo utilizo, no trae la demás información. Supongo que es porque se
    // agrupan los valores por el scope. No podría asegurar que sea esto.
    withNumberOfPartidos,
    // withNumberOfEstadisticos,
    // withNumberOfEquipos,
  ];

  const evento = await eventosService.getEventoById(eventoId, scopes);

  if (!evento) {
    return res.status(404).json({
      message: "El evento no existe.",
    });
  }

  const { id: organizadorId } = evento?.organizador ?? {};

  req.evento = {
    ...evento?.dataValues,
    organizadorId,
    instance: evento,
  };

  next();
};

module.exports = {
  requiredEventoId,
  eventoExists,
};
