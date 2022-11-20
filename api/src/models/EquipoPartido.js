module.exports = (sequelize, DataTypes) => {
  const EquipoPartido = sequelize.define(
    "EquipoPartido",
    {
      puntos: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      localVisitante: {
        type: DataTypes.ENUM("local", "visitante"),
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  EquipoPartido.associate = (models) => {
    EquipoPartido.belongsTo(models.partido);
    EquipoPartido.belongsTo(models.equipo);
  };
  return EquipoPartido;
};
