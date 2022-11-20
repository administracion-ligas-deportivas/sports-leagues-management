module.exports = (sequelize, DataTypes) => {
  const EventoDeportivo = sequelize.define(
    "EventoDeportivo",
    {
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
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  EventoDeportivo.associate = (models) => {
    /* EventoDeportivo.belongsTo(models.Deporte, {
      foreignKey: "organizador_id",
      as: "evento_deportivo_deporte_id",
    }); */
    /* EventoDeportivo.belongsTo(models.formato_evento_deportivo, {
      foreignKey: "formato_evento_deportivo_id",
    }); */
    EventoDeportivo.hasMany(models.EquipoEventoDeportivo, {
      foreignKey: "evento_deportivo_id",
    });
    EventoDeportivo.hasMany(models.pago_evento_deportivo, {
      foreignKey: "evento_deportivo_id",
    });
    EventoDeportivo.hasMany(models.partido, {
      foreignKey: "evento_deportivo_id",
    });
    EventoDeportivo.hasMany(models.migracion_equipo_evento_deportivo, {
      foreignKey: "evento_deportivo_origen_id",
    });
    EventoDeportivo.hasMany(models.migracion_equipo_evento_deportivo, {
      foreignKey: "evento_deportivo_destino_id",
    });
    EventoDeportivo.belongsTo(models.formato_evento_deportivo, {
      foreignKey: "formato_evento_deportivo_id",
    });
    EventoDeportivo.belongsTo(models.Usuario, {
      foreignKey: "organizador_id",
    });
    EventoDeportivo.belongsToMany(models.Usuario, {
      through: "estadistico_evento_deportivo",
      foreignKey: "evento_deportivo_id",
    });
  };

  return EventoDeportivo;
};
