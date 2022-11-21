module.exports = (sequelize /* DataTypes */) => {
  const estadisticaDeporte = sequelize.define(
    "estadisticaDeporte",
    {},
    {
      tableName: "estadistica_deporte",
    }
  );

  return estadisticaDeporte;
};
