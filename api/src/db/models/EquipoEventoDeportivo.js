module.exports = (sequelize /* , DataTypes */) => {
  const EquipoEventoDeportivo = sequelize.define(
    "EquipoEventoDeportivo" /* , {
    paranoid: true,
  } */
  );

  //Las relaciones se generan de esta manera
  //Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  EquipoEventoDeportivo.associate = (models) => {
    EquipoEventoDeportivo.belongsTo(models.EventoDeportivo);
    EquipoEventoDeportivo.belongsTo(models.Equipo);
  };
  return EquipoEventoDeportivo;
};
