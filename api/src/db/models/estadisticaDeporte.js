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
        allowNull: false,
      },
    });
    estadisticaDeporte.belongsTo(models.estadistica, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return estadisticaDeporte;
};
