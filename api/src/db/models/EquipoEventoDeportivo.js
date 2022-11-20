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
    equipoEventoDeportivo.belongsTo(models.eventoDeportivo);
    equipoEventoDeportivo.belongsTo(models.equipo);
  };
  return equipoEventoDeportivo;
};
