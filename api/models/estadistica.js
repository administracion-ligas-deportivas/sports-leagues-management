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
    {
      paranoid: true,
    }
  );

  estadistica.associate = (models) => {
    estadistica.hasMany(models.estadistica_jugador_partido, {
      foreignKey: "estadistica_id",
    });
    estadistica.hasMany(models.estadistica_deporte, {
      foreignKey: "estadistica_id",
    });
  };
  return estadistica;
};
