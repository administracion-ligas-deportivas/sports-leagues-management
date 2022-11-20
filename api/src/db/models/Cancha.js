module.exports = (sequelize, DataTypes) => {
  const Cancha = sequelize.define("Cancha", {
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Las relaciones se generan de esta manera
  // Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  Cancha.associate = (models) => {
    Cancha.belongsTo(models.Deportivo);
    Cancha.hasMany(models.Partido);
  };
  return Cancha;
};
