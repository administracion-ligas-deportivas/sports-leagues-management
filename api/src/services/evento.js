const { eventoDeportivo } = require("../db/models");

const createEvento = async (eventoId, data) => {
  const { formatoEventoDeportivoId, deporteId, ...rest } = data;

  if (!formatoEventoDeportivoId && !deporteId) {
    return {
      error: "No se ha especificado el formato del evento o el deporte",
      status: 400,
    };
  }

  // Add formatoEventoDeportivoId and not deporteId if formatoEventoDeportivoId
  // was specified. Otherwise, add deporteId.
  const evento = {
    ...rest,
    formatoEventoDeportivoId,
    deporteId: formatoEventoDeportivoId ? null : deporteId,
  };

  return await eventoDeportivo.create(evento, {
    where: {
      id: eventoId,
    },
  });
};

const eventoService = {
  createEvento,
};

module.exports = {
  eventoService,
};
