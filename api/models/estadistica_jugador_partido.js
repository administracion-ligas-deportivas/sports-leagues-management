module.exports = (sequelize, DataTypes) => {
  const estadistica_jugador_partido = sequelize.define(
    "estadistica_jugador_partido",
    {
      estadistica_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      partido_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
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

  estadistica_jugador_partido.associate = (models) => {
    estadistica_jugador_partido.belongsTo(models.partido, {
      foreignKey: "partido_id",
    });
    estadistica_jugador_partido.belongsTo(models.estadistica, {
      foreignKey: "estadistica_id",
    });
    estadistica_jugador_partido.belongsTo(models.Usuario, {
      foreignKey: "jugador_id",
    });
  };
  return estadistica_jugador_partido;
};
