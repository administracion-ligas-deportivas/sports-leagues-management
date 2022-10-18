module.exports = (sequelize, DataTypes) => {
  const equipo_partido = sequelize.define("equipo_partido", {
    partido_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    equipo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    puntos: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    local_visitante: {
      type: DataTypes.ENUM("local", "visitante"),
      allowNull: false,
    },
  });

  equipo_partido.associate = (models) => {
    equipo_partido.belongsTo(models.partido, {
      foreignKey: "partido_id",
      as: "equipo_partido_partido_id",
    });
    equipo_partido.belongsTo(models.equipo, {
      foreignKey: "equipo_id",
      as: "equipo_partido_equipo_id",
    });
  };
  return equipo_partido;
};
