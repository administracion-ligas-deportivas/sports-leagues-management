module.exports = (sequelize, DataTypes) => {
  const Equipo = sequelize.define(
    "Equipo",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      encargado_equipo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  //Pendiente agregar relacion a tabla partido
  Equipo.associate = (models) => {
    /* Equipo.hasMany(models.jugador_equipo, {
      foreignKey: "equipo_id",
    }); */
    Equipo.hasMany(models.EquipoEventoDeportivo, {
      foreignKey: "equipo_id",
    });
    Equipo.hasMany(models.EquipoPartido, {
      foreignKey: "equipo_id",
    });
    Equipo.hasMany(models.pago_evento_deportivo, {
      foreignKey: "equipo_id",
    });
    Equipo.hasMany(models.migracion_equipo_evento_deportivo, {
      foreignKey: "equipo_id",
    });
    Equipo.belongsToMany(models.Usuario, {
      through: models.jugador_equipo,
    });
  };
  return Equipo;
};
