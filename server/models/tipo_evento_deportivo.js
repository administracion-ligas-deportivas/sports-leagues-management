module.exports = (sequelize, DataTypes) => {
  const tipo_evento_deportivo = sequelize.define("tipo_evento_deportivo", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return tipo_evento_deportivo;
};
