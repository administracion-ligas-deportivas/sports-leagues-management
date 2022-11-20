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
    {
      paranoid: true,
    }
  );

  sequelize.associate = (models) => {
    Deporte.hasMany(models.estadistica_deporte);
    Deporte.hasMany(models.formato_evento_deportivo);
  };
  return Deporte;
};
