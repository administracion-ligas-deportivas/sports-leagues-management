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
      paranoid: true,
    }
  );

  sequelize.associate = (models) => {
    TipoEventoDeportivo.hasMany(models.FormatoEventoDeportivo, {
      foreignKey: "tipo_evento_deportivo_id",
    });
  };
  return TipoEventoDeportivo;
};
