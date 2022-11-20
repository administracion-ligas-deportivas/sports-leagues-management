module.exports = (sequelize /* DataTypes */) => {
  const EquipoEventoDeportivo = sequelize.define("EquipoEventoDeportivo", {
    paranoid: true,
  });

  //Las relaciones se generan de esta manera
  //Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  EquipoEventoDeportivo.associate = (models) => {
    EquipoEventoDeportivo.belongsTo(models.evento_deportivo);
    EquipoEventoDeportivo.belongsTo(models.equipo);
  };
  return EquipoEventoDeportivo;
};
