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

  // Pendiente agregar relacion a tabla partido
  equipo.associate = (models) => {
    /* equipo.hasMany(models.jugadorEquipo, {
      foreignKey: "equipo_id",
    }); */
    equipo.belongsTo(models.usuario, {
      foreignKey: {
        name: "encargado_equipo_id",
        allowNull: false,
      },
    });
    equipo.belongsTo(models.deporte, {
      foreignKey: {
        allowNull: false,
      },
    });

    equipo.belongsToMany(models.usuario, {
      through: models.jugadorEquipo,
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
