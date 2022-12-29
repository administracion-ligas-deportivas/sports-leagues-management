const {
  eventoDeportivo,
  partido,
  formatoEventoDeportivo,
  cancha,
  usuario,
  equipo,
} = require("../db/models");

const getEventos = async () => {
  return await eventoDeportivo.findAll({
    include: [
      formatoEventoDeportivo,
      equipo,
      {
        model: usuario,
        as: "estadisticos",
      },
    ],
  });
};

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
    include: [
      {
        model: usuario,
        as: "estadistico",
      },
      cancha,
    ],
    attributes: {
      exclude: ["eventoDeportivoId", "estadisticoId", "canchaId"],
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

const getEquiposFromEvento = async (eventoId) => {
  const evento = await eventoDeportivo.findByPk(eventoId);

  console.log({ evento });

  if (!evento) {
    return {
      error: "No se ha encontrado el evento",
      status: 404,
    };
  }

  // https://sequelize.org/docs/v6/core-concepts/assocs/#foobelongstomanybar--through-baz-
  /**
    For belongsToMany relationships, by default getBars() will return all fields
    from the join table. Note that any include options will apply to the target
    Bar object, so trying to set options for the join table as you would when
    eager loading with find methods is not possible. To choose what attributes
    of the join table to include, getBars() supports a joinTableAttributes
    option that can be used similarly to setting through.attributes in an
    include. As an example, given Foo belongsToMany Bar, the following will both
    output results without join table fields:
   */
  return await evento.getEquipos({ joinTableAttributes: [] });
};

const getEstadisticosFromEvento = async (eventoId) => {
  const evento = await eventoDeportivo.findByPk(eventoId);

  if (!evento) return null;

  return await evento?.getEstadisticos({
    joinTableAttributes: [],
  });
};

const eventoService = {
  createEvento,
  getEventos,
  getPartidosFromEvento,
  getFormatoEvento,
  getEquiposFromEvento,
  getEstadisticosFromEvento,
};

module.exports = {
  eventoService,
};
