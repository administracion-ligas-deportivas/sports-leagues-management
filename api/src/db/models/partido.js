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
        allowNull: true,
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
    partido.belongsTo(models.cancha, {
      foreignKey: {
        name: "canchaId",
        allowNull: false,
      },
    });
    partido.belongsTo(models.usuario, {
      foreignKey: "estadisticoId",
    });
    partido.belongsTo(models.eventoDeportivo, {
      foreignKey: {
        name: "eventoDeportivoId",
        allowNull: false,
      },
    });

    partido.belongsToMany(models.equipo, {
      through: models.equipoPartido,
    });

    partido.hasMany(models.estadisticaJugadorPartido);
  };
  return partido;
};
