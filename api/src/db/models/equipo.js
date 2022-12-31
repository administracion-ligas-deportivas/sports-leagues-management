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

    equipo.addScope("defaultScope", {
      // Add jugadores count
      attributes: {
        include: [
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM jugador_equipo WHERE equipo.id = jugador_equipo.equipo_id)"
            ),
            "numberOfJugadores",
          ],
        ],
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
