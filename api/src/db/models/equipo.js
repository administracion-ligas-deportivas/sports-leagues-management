module.exports = (sequelize, DataTypes) => {
  const equipo = sequelize.define(
    "equipo",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
    },
    {}
  );

  equipo.associate = (models) => {
    const { deporte, usuario } = models;

    equipo.addScope("withNumberOfJugadores", {
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
    });

    // equipo.addScope("defaultScope", {
    //   include: {
    //     model: usuario,
    //     as: "jugadores",
    //   },
    //   attributes: {
    //     include: [
    //       // sequelize.fn("COUNT"),
    //       [
    //         sequelize.fn("COUNT", sequelize.col("jugador_equipo.equipo_id")),
    //         // sequelize.fn("COUNT", sequelize.col("jugador_equipo.equipo_id")),
    //         "numberOfJugadores",
    //       ],
    //     ],
    //   },
    //   // group: ["jugador_equipo.equipo_id"],
    // });

    equipo.addScope("includeEncargado", {
      include: {
        model: usuario,
        as: "encargado",
      },
    });

    equipo.addScope("includeEverything", {
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
    });

    equipo.belongsTo(models.usuario, {
      foreignKey: {
        name: "encargadoEquipoId",
        allowNull: false,
      },
      as: "encargado",
    });
    equipo.belongsTo(models.deporte, {
      foreignKey: {
        allowNull: false,
      },
    });

    equipo.belongsToMany(models.usuario, {
      through: models.jugadorEquipo,
      as: {
        singular: "jugador",
        plural: "jugadores",
      },
    });
    equipo.belongsToMany(models.eventoDeportivo, {
      through: models.equipoEventoDeportivo,
    });
    equipo.belongsToMany(models.partido, {
      through: models.equipoPartido,
    });

    equipo.hasMany(models.pagoEventoDeportivo);
    equipo.hasMany(models.migracionEquipoEventoDeportivo);
  };
  return equipo;
};
