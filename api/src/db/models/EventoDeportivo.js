module.exports = (sequelize, DataTypes) => {
  const EventoDeportivo = sequelize.define(
    "EventoDeportivo",
    {
      organizador_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fechaFinalizacion: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      descripcion_pagos: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
    },
    {
      tableName: "evento_deportivo",
    }
  );

  EventoDeportivo.associate = (models) => {
    EventoDeportivo.hasMany(models.EquipoEventoDeportivo);
    EventoDeportivo.hasMany(models.PagoEventoDeportivo);
    EventoDeportivo.hasMany(models.Partido);
    EventoDeportivo.hasMany(models.MigracionEquipoEventoDeportivo, {
      foreignKey: "evento_deportivo_origen_id",
    });
    EventoDeportivo.hasMany(models.MigracionEquipoEventoDeportivo, {
      foreignKey: "evento_deportivo_destino_id",
    });
    EventoDeportivo.belongsTo(models.FormatoEventoDeportivo);
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
