module.exports = (sequelize, DataTypes) => {
  const estadistica_deporte = sequelize.define(
    "estadistica_deporte",
    {
      deporte_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
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

  estadistica_deporte.associate = (models) => {
    estadistica_deporte.belongsTo(models.deporte, {
      foreignKey: "deporte_id",
    });
    estadistica_deporte.hasMany(models.estadistica_jugador_partido, {
      foreignKey: "estadistica_deporte_id",
    });
  };
  return estadistica_deporte;
};
