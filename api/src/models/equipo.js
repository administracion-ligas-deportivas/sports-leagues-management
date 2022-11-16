module.exports = (sequelize, DataTypes) => {
  const equipo = sequelize.define(
    "equipo",
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
  equipo.associate = (models) => {
    /* equipo.hasMany(models.jugador_equipo, {
      foreignKey: "equipo_id",
    }); */
    equipo.hasMany(models.equipo_evento_deportivo, {
      foreignKey: "equipo_id",
    });
    equipo.hasMany(models.equipo_partido, {
      foreignKey: "equipo_id",
    });
    equipo.hasMany(models.pago_evento_deportivo, {
      foreignKey: "equipo_id",
    });
    equipo.hasMany(models.migracion_equipo_evento_deportivo, {
      foreignKey: "equipo_id",
    });
    equipo.belongsToMany(models.Usuario, {
      through: models.jugador_equipo,
    });
  };
  return equipo;
};
