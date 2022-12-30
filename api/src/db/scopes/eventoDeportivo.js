const getScopesEventoDeportivo = (models) => {
  const { equipo, formatoEventoDeportivo, partido, usuario } = models;

  const scopesEventoDeportivo = {
    generalData: {
      name: "generalData",
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
      name: "includeEverything",
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
      name: "withFormato",
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
      name: "withPartidos",
      scope: {
        include: partido,
      },
    },
    withEstadisticos: {
      name: "withEstadisticos",
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

  const { generalData, withFormato, includeEverything } = scopesEventoDeportivo;

  const scopesToInclude = [generalData, withFormato, includeEverything];

  return {
    scopes: scopesToInclude,
    scopesToInclude,
  };
};

module.exports = { getScopesEventoDeportivo };
