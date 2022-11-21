module.exports = (sequelize /* , DataTypes */) => {
  const equipoEventoDeportivo = sequelize.define(
    "equipoEventoDeportivo",
    {},
    {
      tableName: "equipo_evento_deportivo",
    }
  );

  // Las relaciones se generan de esta manera
  // Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  equipoEventoDeportivo.associate = (models) => {
    equipoEventoDeportivo.belongsTo(models.eventoDeportivo, {
      foreignKey: {
        name: "eventoDeportivoId",
        allowNull: false,
      },
    });
    equipoEventoDeportivo.belongsTo(models.equipo, {
      foreignKey: {
        name: "equipoId",
        allowNull: false,
      },
    });
  };
  return equipoEventoDeportivo;
};
