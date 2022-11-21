const { LOCAL_VISITANTE } = require("../../constants/partidos");

module.exports = (sequelize, DataTypes) => {
  const equipoPartido = sequelize.define(
    "equipoPartido",
    {
      puntos: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
