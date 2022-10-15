module.exports = (sequelize, DataTypes) => {
  const estadistica_deporte = sequelize.define("estadistica_deporte", {
    deporte_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  estadistica_deporte.associate = (models) => {
    estadistica_deporte.belongsTo(models.deporte, {
      foreignKey: "deporte_id",
      as: "estadistica_deporte_deporte_id",
    });
  };
  return estadistica_deporte;
};
