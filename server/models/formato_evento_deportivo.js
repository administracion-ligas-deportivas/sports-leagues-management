module.exports = (sequelize, DataTypes) => {
  const formato_evento_deportivo = sequelize.define(
    "formato_evento_deportivo",
    {
      deporte_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tipo_evento_deportivo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      maximo_equipos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }
  );

  formato_evento_deportivo.associate = (models) => {
    formato_evento_deportivo.belongsTo(models.deporte, {
      foreignKey: "deporte_id",
    });
    formato_evento_deportivo.hasMany(models.evento_deportivo, {
      foreignKey: "formato_evento_deportivo_id",
    });

    formato_evento_deportivo.belongsTo(models.tipo_evento_deportivo, {
      foreignKey: "tipo_evento_deportivo_id",
    });
  };

  return formato_evento_deportivo;
};
