const { SCOPE_NAMES } = require("#src/db/scopes/eventoDeportivo.js");
const { eventosService } = require("#src/services/index.js");

const { includeEverything, withFormato } = SCOPE_NAMES;

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
    includeEverything,
    withFormato
    // Si lo utilizo, no trae la demás información. Supongo que es porque se
    // agrupan los valores por el scope. No podría asegurar que sea esto.
    // withNumberOfPartidos,
    // withNumberOfEstadisticos,
    // withNumberOfEquipos,
  ];

  const evento = await eventosService.getEventoById(eventoId, scopes);

  if (!evento || evento?.dataValues?.deletedAt || !evento?.id) {
    return res.status(404).json({
      message: "El evento no existe.",
    });
  }

  const deporteId = eventosService.getDeporteIdFromEvento(evento);

  const { id: organizadorId } = evento?.organizador ?? {};

  req.evento = {
    ...evento?.dataValues,
    organizadorId,
    instance: evento,
    deporteId,
  };

  next();
};

const isUsuarioOrganizadorEvento = async (req, res, next) => {
  const { evento } = req ?? {};
  const { id } = req?.user ?? {};

  if (!eventosService.isUsuarioOrganizadorEvento(id, evento)) {
    // https://developer.mozilla.org/es/docs/Web/HTTP/Status/403
    // El 401 es para cuando el usuario no está autenticado. El 403 es para cuando
    // el usuario está autenticado pero no tiene permisos para realizar la acción.
    res.status(403).json({
      message: "El usuario no es organizador del evento.",
    });
    return;
  }

  next();
};

module.exports = {
  requiredEventoId,
  eventoExists,
  isUsuarioOrganizadorEvento,
};
