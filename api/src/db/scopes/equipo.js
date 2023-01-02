const SCOPE_NAMES = {
  withNumberOfJugadores: "withNumberOfJugadores",
  withEncargado: "withEncargado",
  includeEverything: "includeEverything",
};

const getScopesEquipo = (models, sequelize) => {
  const { deporte, usuario } = models;

  const SCOPES_EQUIPO = {
    withNumberOfJugadores: {
      name: SCOPE_NAMES.withNumberOfJugadores,
      scope: {
        // Add jugadores count
        attributes: {
          include: [
            [
              // https://sequelize.org/docs/v6/other-topics/scopes/#definition
              // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#specifying-attributes-for-select-queries
              // https://sequelize.org/docs/v6/other-topics/sub-queries/
              sequelize.literal(
                "(SELECT COUNT(*) FROM jugador_equipo WHERE equipo.id = jugador_equipo.equipo_id)"
              ),
              "numberOfJugadores",
            ],
          ],
        },
      },
    },
    withEncargado: {
      name: SCOPE_NAMES.withEncargado,
      scope: {
        include: {
          model: usuario,
          as: "encargado",
        },
      },
    },
    includeEverything: {
      name: SCOPE_NAMES.includeEverything,
      scope: {
        include: [
          {
            model: usuario,
            as: "jugadores",

            through: {
              attributes: [],
            },
          },
          {
            model: usuario,
            as: "encargado",
          },
          deporte,
        ],
        attributes: {
          exclude: ["deporteId", "encargadoEquipoId"],
        },
      },
    },
  };

  const { withNumberOfJugadores, withEncargado, includeEverything } =
    SCOPES_EQUIPO;

  const SCOPES_TO_INCLUDE = [
    withNumberOfJugadores,
    withEncargado,
    includeEverything,
  ];

  return { SCOPES_EQUIPO, SCOPES_TO_INCLUDE };
};

module.exports = { getScopesEquipo, SCOPE_NAMES };
