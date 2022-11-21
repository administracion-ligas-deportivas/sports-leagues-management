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
    municipio.belongsTo(models.estado, {
      foreignKey: {
        name: "estadoId",
        allowNull: false,
      },
    });
  };
  municipio.assosiate = function (models) {
    municipio.hasMany(models.deportivo);
  };
  return municipio;
};
