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
      foreignKey: { name: "eventoDeportivoOrigenId", allowNull: false },
    });
    EventoDeportivo.hasMany(models.MigracionEquipoEventoDeportivo, {
      foreignKey: { name: "eventoDeportivoDestinoId", allowNull: false },
    });
    EventoDeportivo.belongsTo(models.FormatoEventoDeportivo, {
      foreignKey: {
        // Los formatos son opcionales.
        allowNull: true,
      },
    });
    EventoDeportivo.belongsTo(models.Usuario, {
      foreignKey: {
        name: "organizadorId",
        allowNull: false,
      },
    });
    EventoDeportivo.belongsToMany(models.Usuario, {
      through: models.EstadisticoEventoDeportivo,
      foreignKey: { name: "eventoDeportivoId", allowNull: false },
    });
  };

  return EventoDeportivo;
};
