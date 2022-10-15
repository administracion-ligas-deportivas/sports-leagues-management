module.exports = (sequelize, DataTypes) => {
  const deporte = sequelize.define("deporte", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return deporte;
};
