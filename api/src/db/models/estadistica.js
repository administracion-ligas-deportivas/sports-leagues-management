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
    estadistica.belongsToMany(models.deporte, {
      through: models.estadisticaDeporte,
    });

    estadistica.hasMany(models.estadisticaJugadorPartido);
  };
  return estadistica;
};
