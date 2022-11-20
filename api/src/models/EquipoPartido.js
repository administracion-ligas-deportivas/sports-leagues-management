module.exports = (sequelize, DataTypes) => {
  const EquipoPartido = sequelize.define(
    "EquipoPartido",
    {
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
    },
    {
      paranoid: true,
    }
  );

  EquipoPartido.associate = (models) => {
    EquipoPartido.belongsTo(models.partido, {
      foreignKey: "partido_id",
    });
    EquipoPartido.belongsTo(models.equipo, {
      foreignKey: "equipo_id",
    });
  };
  return EquipoPartido;
};
