module.exports = (sequelize, DataTypes) => {
  const cancha = sequelize.define("cancha", {
    deportivo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  //Las relaciones se generan de esta manera
  //Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  cancha.associate = (models) => {
    cancha.belongsTo(models.deportivo, {
      foreignKey: "deportivo_id",
    });
    cancha.hasMany(models.partido, {
      foreignKey: "deportivo_id",
    });
  };
  return cancha;
};
