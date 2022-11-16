module.exports = (sequelize, DataTypes) => {
  const Municipio = sequelize.define(
    "Municipio",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  Municipio.assosiate = function (models) {
    Municipio.belongsTo(models.Estado, {
      foreignKey: "municipio_id",
    });
  };
  Municipio.assosiate = function (models) {
    Municipio.hasMany(models.deportivo, {
      foreignKey: "municipio_id",
    });
  };
  return Municipio;
};
