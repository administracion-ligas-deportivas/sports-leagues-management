module.exports = (sequelize, DataTypes) => {
  const Deporte = sequelize.define(
    "Deporte",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {}
  );

  sequelize.associate = (models) => {
    Deporte.hasMany(models.EstadisticaDeporte);
    Deporte.hasMany(models.FormatoEventoDeportivo);
  };
  return Deporte;
};
