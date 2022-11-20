module.exports = (sequelize, DataTypes) => {
  const Partido = sequelize.define(
    "Partido",
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
    {
      paranoid: true,
    }
  );

  //Las relaciones se generan de esta manera
  //Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  Partido.associate = (models) => {
    Partido.hasMany(models.EstadisticaJugadorPartido);
    Partido.hasMany(models.EquipoPartido);
    Partido.belongsTo(models.Cancha);
    Partido.belongsTo(models.Usuario, {
      foreignKey: "estadistico_id",
    });
    Partido.belongsTo(models.EventoDeportivo);
  };
  return Partido;
};
