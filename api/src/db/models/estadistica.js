module.exports = (sequelize, DataTypes) => {
  const estadistica = sequelize.define(
    "estadistica",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  estadistica.associate = (models) => {
    estadistica.hasMany(models.estadisticaJugadorPartido);
    estadistica.hasMany(models.estadisticaDeporte);
  };
  return estadistica;
};
