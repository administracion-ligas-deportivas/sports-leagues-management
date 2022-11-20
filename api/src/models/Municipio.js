module.exports = (sequelize, DataTypes) => {
  const Municipio = sequelize.define(
    "Municipio",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  Municipio.assosiate = function (models) {
    Municipio.belongsTo(models.Estado);
  };
  Municipio.assosiate = function (models) {
    Municipio.hasMany(models.Deportivo);
  };
  return Municipio;
};
