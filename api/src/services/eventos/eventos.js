// const { eventoDeportivo } = require("#src/db/models/index.js");
// No funciona si
const { eventoDeportivo } = require("#src/db/models/index.js");
const { SCOPE_NAMES } = require("#src/db/scopes/eventoDeportivo.js");

const getEventos = async () => {
  return await eventoDeportivo.findAll();
};

const getEventoById = async (eventoId, ...scopes) => {
  const scopesToInclude = scopes.length
    ? scopes
    : SCOPE_NAMES.includeEverything;

  return await eventoDeportivo.scope(scopesToInclude).findByPk(eventoId);
};

const createEvento = async (data) => {
  const { formatoEventoDeportivoId, deporteId, ...rest } = data;

  if (!formatoEventoDeportivoId && !deporteId) return;

  // Add formatoEventoDeportivoId and not deporteId if formatoEventoDeportivoId
  // was specified. Otherwise, add deporteId.
  const evento = {
    ...rest,
    formatoEventoDeportivoId,
    deporteId: formatoEventoDeportivoId ? null : deporteId,
  };

  return await eventoDeportivo.create(evento);
};

module.exports = {
  getEventos,
  getEventoById,
  createEvento,
};
