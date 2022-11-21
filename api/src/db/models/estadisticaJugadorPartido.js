module.exports = (sequelize, DataTypes) => {
  const estadisticaJugadorPartido = sequelize.define(
    "estadisticaJugadorPartido",
    {
      jugadorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tiempoTranscurrido: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "estadistica_jugador_partido",
    }
  );

  // Las relaciones se generan de esta manera
  // Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  estadisticaJugadorPartido.associate = (models) => {
    estadisticaJugadorPartido.belongsTo(models.partido);
    estadisticaJugadorPartido.belongsTo(models.estadistica);
    estadisticaJugadorPartido.belongsTo(models.usuario, {
      foreignKey: "jugadorId",
    });
  };
  return estadisticaJugadorPartido;
};