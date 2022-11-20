module.exports = (sequelize, DataTypes) => {
  const EstadisticaJugadorPartido = sequelize.define(
    "EstadisticaJugadorPartido",
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

  EstadisticaJugadorPartido.associate = (models) => {
    EstadisticaJugadorPartido.belongsTo(models.Partido);
    EstadisticaJugadorPartido.belongsTo(models.Estadistica);
    EstadisticaJugadorPartido.belongsTo(models.Usuario, {
      foreignKey: "jugadorId",
    });
  };
  return EstadisticaJugadorPartido;
};
