module.exports = (sequelize, DataTypes) => {
  const cancha = sequelize.define("cancha", {
    numero: {
      type: DataTypes.INTEGER,
    },
    nombre: {
      type: DataTypes.STRING,
    },
  });

  // Las relaciones se generan de esta manera
  // Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});
  cancha.associate = (models) => {
    cancha.belongsTo(models.deportivo);
    cancha.hasMany(models.partido);
  };

  return cancha;
};
