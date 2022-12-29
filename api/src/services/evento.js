import {
  deporte,
  eventoDeportivo,
  formatoEventoDeportivo,
  partido,
} from "../db/models/index.js";

const createEvento = async (data) => {
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

  return await eventoDeportivo.create(evento);
};

const getPartidosFromEvento = async (eventoId) => {
  return await partido.findAll({
    where: {
      eventoDeportivoId: eventoId,
    },
  });
};

const getFormatoEvento = async (eventoId) => {
  const evento = await eventoDeportivo.findByPk(eventoId, {
    include: [
      {
        model: formatoEventoDeportivo,
        include: ["deporte", "tipoEventoDeportivo"],
        attributes: {
          exclude: ["deporteId", "tipoEventoDeportivoId"],
        },
      },
    ],
  });

  return { evento, formatoEvento: evento?.formatoEventoDeportivo };
};

const eventoService = {
  createEvento,
  getPartidosFromEvento,
  getFormatoEvento,
};

export { eventoService };
