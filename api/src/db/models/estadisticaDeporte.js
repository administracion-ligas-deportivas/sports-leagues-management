module.exports = (sequelize /* DataTypes */) => {
  const estadisticaDeporte = sequelize.define(
    "estadisticaDeporte",
    {},
    {
      tableName: "estadistica_deporte",
    }
  );

  estadisticaDeporte.associate = (models) => {
    estadisticaDeporte.belongsTo(models.deporte);
    estadisticaDeporte.belongsTo(models.estadistica);
  };
  return estadisticaDeporte;
};
