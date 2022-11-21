module.exports = (sequelize, DataTypes) => {
  const equipoPartido = sequelize.define(
    "equipoPartido",
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
      tableName: "equipo_partido",
    }
  );

  equipoPartido.associate = (models) => {
    equipoPartido.belongsTo(models.partido);
    equipoPartido.belongsTo(models.equipo);
  };
  
  return equipoPartido;
};
