module.exports = (sequelize, DataTypes) => {
  const cancha = sequelize.define("cancha", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero: {
      type: DataTypes.INTEGER,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
  });

  // Las relaciones se generan de esta manera
  // Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});
  cancha.associate = (models) => {
    cancha.belongsTo(models.deportivo, {
      foreignKey: {
        allowNull: false,
      },
    });
    cancha.hasMany(models.partido);
  };

  return cancha;
};
