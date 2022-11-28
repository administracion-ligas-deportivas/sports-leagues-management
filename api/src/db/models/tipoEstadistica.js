module.exports = (sequelize, DataTypes) => {
  const tipoEstadistica = sequelize.define(
    "tipoEstadistica",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  tipoEstadistica.associate = (models) => {
    tipoEstadistica.belongsToMany(models.deporte, {
      through: models.estadisticaDeporte,
    });

    tipoEstadistica.hasMany(models.estadisticaJugadorPartido);
  };
  return tipoEstadistica;
};
