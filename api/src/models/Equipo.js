module.exports = (sequelize, DataTypes) => {
  const Equipo = sequelize.define(
    "Equipo",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      encargadoEquipoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  //Pendiente agregar relacion a tabla Partido
  Equipo.associate = (models) => {
    /* Equipo.hasMany(models.JugadorEquipo, {
      foreignKey: "equipo_id",
    }); */
    Equipo.hasMany(models.EquipoEventoDeportivo);
    Equipo.hasMany(models.EquipoPartido);
    Equipo.hasMany(models.PagoEventoDeportivo);
    Equipo.hasMany(models.MigracionEquipoEventoDeportivo);
    Equipo.belongsToMany(models.Usuario, {
      through: models.JugadorEquipo,
    });
  };
  return Equipo;
};
