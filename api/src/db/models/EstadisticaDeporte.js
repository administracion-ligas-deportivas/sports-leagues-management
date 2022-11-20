module.exports = (sequelize /* DataTypes */) => {
  const EstadisticaDeporte = sequelize.define(
    "EstadisticaDeporte",
    {},
    {
      tableName: "estadistica_deporte",
    }
  );

  EstadisticaDeporte.associate = (models) => {
    EstadisticaDeporte.belongsTo(models.Deporte);
    EstadisticaDeporte.belongsTo(models.Estadistica);
  };
  return EstadisticaDeporte;
};
