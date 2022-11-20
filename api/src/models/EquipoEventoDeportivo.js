module.exports = (sequelize, DataTypes) => {
  const EquipoEventoDeportivo = sequelize.define(
    "EquipoEventoDeportivo",
    {
      evento_deportivo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      equipo_id: {
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

  EquipoEventoDeportivo.associate = (models) => {
    EquipoEventoDeportivo.belongsTo(models.evento_deportivo, {
      foreignKey: "evento_deportivo_id",
    });
    EquipoEventoDeportivo.belongsTo(models.equipo, {
      foreignKey: "equipo_id",
    });
  };
  return EquipoEventoDeportivo;
};
