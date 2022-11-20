module.exports = (sequelize /* DataTypes */) => {
  const EstadisticaDeporte = sequelize.define("EstadisticaDeporte", {
    paranoid: true,
  });

  EstadisticaDeporte.associate = (models) => {
    EstadisticaDeporte.belongsTo(models.Deporte);
    EstadisticaDeporte.belongsTo(models.estadistica);
  };
  return EstadisticaDeporte;
};
