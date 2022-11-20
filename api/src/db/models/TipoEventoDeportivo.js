module.exports = (sequelize, DataTypes) => {
  const TipoEventoDeportivo = sequelize.define(
    "TipoEventoDeportivo",
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
      tableName: "tipo_evento_deportivo",
    }
  );

  sequelize.associate = (models) => {
    TipoEventoDeportivo.hasMany(models.FormatoEventoDeportivo);
  };
  return TipoEventoDeportivo;
};
