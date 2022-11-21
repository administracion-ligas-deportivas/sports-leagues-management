module.exports = (sequelize /* DataTypes */) => {
  const estadisticaDeporte = sequelize.define(
    "estadisticaDeporte",
    {},
    {
      tableName: "estadistica_deporte",
    }
  );

  estadisticaDeporte.associate = (models) => {
    estadisticaDeporte.belongsTo(models.deporte, {
      foreignKey: {
        name: "deporteId",
        allowNull: false,
      },
    });
    estadisticaDeporte.belongsTo(models.estadistica, {
      foreignKey: {
        name: "estadisticaId",
        allowNull: false,
      },
    });
  };
  return estadisticaDeporte;
};
