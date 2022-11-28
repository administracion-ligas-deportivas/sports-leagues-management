module.exports = (sequelize, DataTypes) => {
  const estadisticaJugadorPartido = sequelize.define(
    "estadisticaJugadorPartido",
    {
      tiempoTranscurrido: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: "estadistica_jugador_partido",
    }
  );

  estadisticaJugadorPartido.associate = (models) => {
    estadisticaJugadorPartido.belongsTo(models.partido, {
      foreignKey: {
        allowNull: false,
      },
    });
    estadisticaJugadorPartido.belongsTo(models.tipoEstadistica, {
      foreignKey: {
        allowNull: false,
      },
    });
    estadisticaJugadorPartido.belongsTo(models.usuario, {
      foreignKey: { name: "jugadorId", allowNull: false },
    });
  };
  return estadisticaJugadorPartido;
};
