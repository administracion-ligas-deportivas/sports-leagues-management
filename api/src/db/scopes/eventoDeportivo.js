const SCOPE_NAMES = {
  generalData: "generalData",
  includeEverything: "includeEverything",
  withFormato: "withFormato",
  withPartidos: "withPartidos",
  withEstadisticos: "withEstadisticos",
};

const getScopesEventoDeportivo = (models) => {
  const { formatoEventoDeportivo, equipo, usuario, partido } = models;

  const SCOPES_EVENTO_DEPORTIVO = {
    generalData: {
      name: SCOPE_NAMES.generalData,
      scope: {
        include: [
          formatoEventoDeportivo,
          { model: usuario, as: "organizador" },
        ],
        attributes: {
          exclude: ["organizadorId", "formatoEventoDeportivoId"],
        },
      },
    },
    includeEverything: {
      name: SCOPE_NAMES.includeEverything,
      scope: {
        include: [
          formatoEventoDeportivo,
          {
            model: equipo,
            through: {
              attributes: [],
            },
          },
          { model: usuario, as: "organizador" },
          {
            model: usuario,
            as: "estadisticos",
            // No obtener atributos de la tabla pivote, "estadisticoEventoDeportivo".
            through: {
              attributes: [],
            },
          },
        ],
        attributes: {
          exclude: ["organizadorId", "formatoEventoDeportivoId"],
        },
      },
    },
    withFormato: {
      name: SCOPE_NAMES.withFormato,
      scope: {
        include: [
          {
            model: formatoEventoDeportivo,
            include: ["deporte", "tipoEventoDeportivo"],
            attributes: {
              exclude: ["deporteId", "tipoEventoDeportivoId"],
            },
          },
        ],
      },
    },
    withPartidos: {
      name: SCOPE_NAMES.withPartidos,
      scope: {
        include: partido,
      },
    },
    withEstadisticos: {
      name: SCOPE_NAMES.withEstadisticos,
      scope: {
        include: {
          model: usuario,
          as: "estadisticos",
          // No obtener atributos de la tabla pivote,
          // "estadisticoEventoDeportivo".

          through: {
            attributes: [],
          },
        },
      },
    },
  };

  const { generalData, withFormato, includeEverything } =
    SCOPES_EVENTO_DEPORTIVO;

  const SCOPES_TO_INCLUDE = [generalData, withFormato, includeEverything];

  return { SCOPES_EVENTO_DEPORTIVO, SCOPES_TO_INCLUDE };
};

module.exports = { getScopesEventoDeportivo, SCOPE_NAMES };
