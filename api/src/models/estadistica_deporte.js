module.exports = (sequelize, DataTypes) => {
  const EstadisticaDeporte = sequelize.define(
    "EstadisticaDeporte",
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

  EstadisticaDeporte.associate = (models) => {
    EstadisticaDeporte.belongsTo(models.Deporte, {
      foreignKey: "deporte_id",
    });
    EstadisticaDeporte.belongsTo(models.estadistica, {
      foreignKey: "estadistica_id",
    });
  };
  return EstadisticaDeporte;
};
