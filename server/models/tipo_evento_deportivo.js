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

  sequelize.associate = (models) => {
    tipo_evento_deportivo.hasMany(models.formato_evento_deportivo, {
      foreignKey: "tipo_evento_deportivo_id",
    });
  };
  return tipo_evento_deportivo;
};
