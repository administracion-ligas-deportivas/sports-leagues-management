const SCOPE_NAMES = {
  generalData: "generalData",
  includeEverything: "includeEverything",
  withFormato: "withFormato",
  withPartidos: "withPartidos",
  withEstadisticos: "withEstadisticos",
  withNumberOfPartidos: "withNumberOfPartidos",
  withNumberOfEstadisticos: "withNumberOfEstadisticos",
  withNumberOfEquipos: "withNumberOfEquipos",
};

const getScopesEventoDeportivo = (models, sequelize) => {
  const { formatoEventoDeportivo, equipo, usuario, partido, deporte, cancha } =
    models;

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
          deporte,
          {
            model: partido,
            as: "partidos",
            include: [
              {
                model: equipo,
                as: "equipos",
                through: {
                  attributes: ["puntos", "localVisitante"],
                },
              },
              cancha,
              {
                model: usuario,
                as: "estadistico",
              },
            ]
          },
          {
            model: equipo,
            as: "equipos",
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
    withNumberOfPartidos: {
      name: SCOPE_NAMES.withNumberOfPartidos,
      scope: {
        include: {
          model: partido,
          attributes: [],
          duplicating: false,
        },
        // https://stackoverflow.com/questions/52496842/sequelize-hasmany-associatedmodel-count-in-attributes-in-query-execution
        // https://stackoverflow.com/a/63068139/13562806
        attributes: {
          // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#:~:text=//%20This%20is%20shorter%2C%20and%20less%20error%20prone%20because%20it%20still%20works%20if%20you%20add%20/%20remove%20attributes%20from%20your%20model%20later
          include: [[sequelize.fn("COUNT", "partido.id"), "numberOfPartidos"]],
        },
        // group: ["eventoDeportivo.id"],
      },
    },
    withNumberOfEstadisticos: {
      name: SCOPE_NAMES.withNumberOfEstadisticos,
      scope: {
        include: {
          model: usuario,
          as: "estadisticos",
          attributes: [],
          duplicating: false,
          through: {
            attributes: [],
          },
        },
        attributes: {
          include: [
            [
              sequelize.fn("COUNT", sequelize.col("estadisticos.id")),
              "numberOfEstadisticos",
            ],
          ],
        },
        group: ["eventoDeportivo.id"],
      },
    },
    withNumberOfEquipos: {
      name: SCOPE_NAMES.withNumberOfEquipos,
      scope: {
        include: {
          model: equipo,
          attributes: [],
          duplicating: false,
          through: {
            attributes: [],
          },
        },
        attributes: {
          include: [
            [
              sequelize.fn("COUNT", sequelize.col("equipos.id")),
              "numberOfEquipos",
            ],
          ],
        },
        // group: ["eventoDeportivo.id"],
      },
    },
  };

  //   const { generalData, withFormato, includeEverything } =
  //     SCOPES_EVENTO_DEPORTIVO;
  //
  //   const SCOPES_TO_INCLUDE = [generalData, withFormato, includeEverything];

  const SCOPES_TO_INCLUDE = Object.values(SCOPES_EVENTO_DEPORTIVO);

  return { SCOPES_EVENTO_DEPORTIVO, SCOPES_TO_INCLUDE };
};

module.exports = { getScopesEventoDeportivo, SCOPE_NAMES };
