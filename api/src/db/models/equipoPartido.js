const { LOCAL_VISITANTE } = require("#src/constants/partidos.js");

module.exports = (sequelize, DataTypes) => {
  const equipoPartido = sequelize.define(
    "equipoPartido",
    {
      puntos: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      localVisitante: {
        type: DataTypes.ENUM(LOCAL_VISITANTE.LOCAL, LOCAL_VISITANTE.VISITANTE),
        allowNull: false,
      },
    },
    {
      tableName: "equipo_partido",
    }
  );

  return equipoPartido;
};
