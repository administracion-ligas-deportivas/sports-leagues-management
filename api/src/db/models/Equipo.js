module.exports = (sequelize, DataTypes) => {
  const equipo = sequelize.define(
    "equipo",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      encargadoEquipoId: {
        type: DataTypes.INTEGER,
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
    equipo.hasMany(models.equipoEventoDeportivo);
    equipo.hasMany(models.equipoPartido);
    equipo.hasMany(models.pagoEventoDeportivo);
    equipo.hasMany(models.migracionEquipoEventoDeportivo);
    equipo.belongsToMany(models.usuario, {
      through: models.jugadorEquipo,
    });
  };
  return equipo;
};
