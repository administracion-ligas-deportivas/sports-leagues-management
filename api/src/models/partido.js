module.exports = (sequelize, DataTypes) => {
  const Partido = sequelize.define(
    "Partido",
    {
      evento_deportivo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cancha_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      notas: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      duracion_partido: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      efectuado: {
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

  Partido.associate = (models) => {
    Partido.hasMany(models.EstadisticaJugadorPartido, {
      foreignKey: "partido_id",
    });
    Partido.hasMany(models.EquipoPartido, {
      foreignKey: "partido_id",
    });
    Partido.belongsTo(models.Cancha, {
      foreignKey: "cancha_id",
    });
    Partido.belongsTo(models.Usuario, {
      foreignKey: "estadistico_id",
    });
    Partido.belongsTo(models.EventoDeportivo, {
      foreignKey: "evento_deportivo_id",
    });
  };
  return Partido;
};
