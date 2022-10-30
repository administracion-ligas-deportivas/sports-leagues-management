module.exports = (sequelize, DataTypes) => {
  const Comentario = sequelize.define(
    "Comentario",
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
    {
      paranoid: true,
    }
  );

  return Comentario;
};
