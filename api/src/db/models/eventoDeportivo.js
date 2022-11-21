module.exports = (sequelize, DataTypes) => {
  const eventoDeportivo = sequelize.define(
    "eventoDeportivo",
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

  eventoDeportivo.associate = (models) => {
    eventoDeportivo.belongsTo(models.formatoEventoDeportivo, {
      foreignKey: {
        // Los formatos son opcionales.
        allowNull: true,
      },
    });
    eventoDeportivo.belongsTo(models.usuario, {
      foreignKey: {
        name: "organizadorId",
        allowNull: false,
      },
    });

    eventoDeportivo.belongsToMany(models.usuario, {
      through: models.EstadisticoEventoDeportivo,
      foreignKey: { name: "eventoDeportivoId", allowNull: false },
    });
    eventoDeportivo.belongsToMany(models.equipo, {
      through: models.equipoEventoDeportivo,
    });

    eventoDeportivo.hasMany(models.pagoEventoDeportivo);
    eventoDeportivo.hasMany(models.partido);

    eventoDeportivo.hasMany(models.migracionEquipoEventoDeportivo, {
      foreignKey: { name: "eventoDeportivoOrigenId", allowNull: false },
    });
    eventoDeportivo.hasMany(models.migracionEquipoEventoDeportivo, {
      foreignKey: { name: "eventoDeportivoDestinoId", allowNull: false },
    });
  };

  return eventoDeportivo;
};
