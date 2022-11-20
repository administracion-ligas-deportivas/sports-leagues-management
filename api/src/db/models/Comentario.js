module.exports = (sequelize, DataTypes) => {
  const comentario = sequelize.define(
    "comentario",
    {
      comentario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      usuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  return comentario;
};
