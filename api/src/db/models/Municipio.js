module.exports = (sequelize, DataTypes) => {
  const municipio = sequelize.define(
    "municipio",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  municipio.assosiate = function (models) {
    municipio.belongsTo(models.estado);
  };
  municipio.assosiate = function (models) {
    municipio.hasMany(models.deportivo);
  };
  return municipio;
};
