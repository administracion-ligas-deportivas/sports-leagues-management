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
    {}
  );

  EquipoPartido.associate = (models) => {
    EquipoPartido.belongsTo(models.Partido);
    EquipoPartido.belongsTo(models.Equipo);
  };
  return EquipoPartido;
};
