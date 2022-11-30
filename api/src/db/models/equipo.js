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
      as: "jugador",
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
