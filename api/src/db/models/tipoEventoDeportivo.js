module.exports = (sequelize, DataTypes) => {
  const tipoEventoDeportivo = sequelize.define(
    "tipoEventoDeportivo",
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
      tableName: "tipo_evento_deportivo",
    }
  );

  sequelize.associate = (models) => {
    tipoEventoDeportivo.hasMany(models.formatoEventoDeportivo);
  };

  return tipoEventoDeportivo;
};
