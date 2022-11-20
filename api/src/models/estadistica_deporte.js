module.exports = (sequelize, DataTypes) => {
  const estadistica_deporte = sequelize.define(
    "estadistica_deporte",
    {
      estadistica_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deporte_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  estadistica_deporte.associate = (models) => {
    estadistica_deporte.belongsTo(models.Deporte, {
      foreignKey: "deporte_id",
    });
    estadistica_deporte.belongsTo(models.estadistica, {
      foreignKey: "estadistica_id",
    });
  };
  return estadistica_deporte;
};
