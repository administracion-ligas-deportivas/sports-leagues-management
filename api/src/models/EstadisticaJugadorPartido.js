module.exports = (sequelize, DataTypes) => {
  const EstadisticaJugadorPartido = sequelize.define(
    "EstadisticaJugadorPartido",
    {
      jugador_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tiempo_transcurrido: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  //Las relaciones se generan de esta manera
  //Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  EstadisticaJugadorPartido.associate = (models) => {
    EstadisticaJugadorPartido.belongsTo(models.partido);
    EstadisticaJugadorPartido.belongsTo(models.estadistica);
    EstadisticaJugadorPartido.belongsTo(models.Usuario, {
      foreignKey: "jugador_id",
    });
  };
  return EstadisticaJugadorPartido;
};
