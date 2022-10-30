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
    {
      paranoid: true,
    }
  );

  sequelize.associate = (models) => {
    deporte.hasMany(models.estadistica_deporte, {
      foregeingKey: "deporte_id",
    });
    deporte.hasMany(models.formato_evento_deportivo, {
      foregeingKey: "deporte_id",
    });
  };
  return deporte;
};
