module.exports = (sequelize, DataTypes) => {
  const deporte = sequelize.define(
    "deporte",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {}
  );

  sequelize.associate = (models) => {
    deporte.belongsToMany(models.estadistica, {
      through: models.estadisticaDeporte,
    });

    deporte.hasMany(models.formatoEventoDeportivo);
    deporte.hasMany(models.equipo);
  };

  return deporte;
};
