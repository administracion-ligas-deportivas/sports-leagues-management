module.exports = (sequelize, DataTypes) => {
  const partido = sequelize.define(
    "partido",
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

  partido.associate = (models) => {
    partido.hasMany(models.EstadisticaJugadorPartido, {
      foreignKey: "partido_id",
    });
    partido.hasMany(models.EquipoPartido, {
      foreignKey: "partido_id",
    });
    partido.belongsTo(models.Cancha, {
      foreignKey: "cancha_id",
    });
    partido.belongsTo(models.Usuario, {
      foreignKey: "estadistico_id",
    });
    partido.belongsTo(models.evento_deportivo, {
      foreignKey: "evento_deportivo_id",
    });
  };
  return partido;
};
