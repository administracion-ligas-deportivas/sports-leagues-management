module.exports = (sequelize, DataTypes) => {
  const deporte = sequelize.define(
    "deporte",
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
    deporte.hasMany(models.estadisticaDeporte);
    deporte.hasMany(models.formatoEventoDeportivo);
    deporte.hasMany(models.equipo);
  };
  return deporte;
};
