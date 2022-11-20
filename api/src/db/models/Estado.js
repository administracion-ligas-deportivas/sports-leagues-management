module.exports = (sequelize, DataTypes) => {
  const Estado = sequelize.define(
    "Estado",
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

  Estado.associate = function (models) {
    Estado.hasMany(models.Municipio);
  };

  return Estado;
};
