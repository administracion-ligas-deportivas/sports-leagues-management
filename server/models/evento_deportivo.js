module.exports = (sequelize, DataTypes) => {
  const evento_deportivo = sequelize.define("evento_deportivo", {
    organizador_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    formato_evento_deportivo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_finalizacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    descripcion_pagos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  evento_deportivo.associate = (models) => {
    /* evento_deportivo.belongsTo(models.deporte, {
      foreignKey: "organizador_id",
      as: "evento_deportivo_deporte_id",
    }); */
    evento_deportivo.belongsTo(models.formato_evento_deportivo, {
      foreignKey: "formato_evento_deportivo_id",
      as: "evento_deportivo_formato_evento_deportivo_id",
    });
  };

  return evento_deportivo;
};
