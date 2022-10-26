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
    /* evento_deportivo.belongsTo(models.formato_evento_deportivo, {
      foreignKey: "formato_evento_deportivo_id",
    }); */
    evento_deportivo.hasMany(models.equipo_evento_deportivo, {
      foreignKey: "evento_deportivo_id",
    });
    evento_deportivo.hasMany(models.pago_evento_deportivo, {
      foreignKey: "evento_deportivo_id",
    });
    evento_deportivo.hasMany(models.partido, {
      foreignKey: "evento_deportivo_id",
    });
    evento_deportivo.hasMany(models.migracion_equipo_evento_deportivo, {
      foreignKey: "evento_deportivo_origen_id",
    });
    evento_deportivo.hasMany(models.migracion_equipo_evento_deportivo, {
      foreignKey: "evento_deportivo_destino_id",
    });
    evento_deportivo.belongsTo(models.formato_evento_deportivo, {
      foreignKey: "formato_evento_deportivo_id",
    });
    evento_deportivo.belongsTo(models.Usuario, {
      foreignKey: "organizador_id",
    });
    evento_deportivo.belongsToMany(models.Usuario, {
      through: "estadistico_evento_deportivo",
      foreignKey: "evento_deportivo_id",
    });
  };

  return evento_deportivo;
};
