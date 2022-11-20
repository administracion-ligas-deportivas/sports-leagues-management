module.exports = (sequelize, DataTypes) => {
  const Estadistica = sequelize.define(
    "Estadistica",
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

  Estadistica.associate = (models) => {
    Estadistica.hasMany(models.EstadisticaJugadorPartido);
    Estadistica.hasMany(models.EstadisticaDeporte);
  };
  return Estadistica;
};
