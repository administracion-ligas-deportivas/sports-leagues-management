module.exports = (sequelize, DataTypes) => {
  const partido = sequelize.define(
    "partido",
    {
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      notas: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      duracionPartido: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      efectuado: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );

  // Las relaciones se generan de esta manera
  // Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  partido.associate = (models) => {
    partido.hasMany(models.estadisticaJugadorPartido);
    partido.hasMany(models.equipoPartido);
    partido.belongsTo(models.cancha, {
      foreignKey: {
        allowNull: false,
      },
    });
    partido.belongsTo(models.usuario, {
      foreignKey: "estadisticoId",
    });
    partido.belongsTo(models.eventoDeportivo, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return partido;
};