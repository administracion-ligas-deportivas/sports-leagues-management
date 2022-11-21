module.exports = (sequelize, DataTypes) => {
  const migracionEquipoEventoDeportivo = sequelize.define(
    "migracionEquipoEventoDeportivo",
    {
      fechaPeticion: {
        type: DataTypes.DATETIME,
        allowNull: false,
      },
      fechaVeredicto: {
        type: DataTypes.DATETIME,
        allowNull: true,
      },
      autorizado: {
        type: DataTypes.BOOLEAN,
        // Si el valor es NULL, aún no ha sido autorizado ni denegado.
        allowNull: true,
      },
    },
    {
      tableName: "migracion_equipo_evento_deportivo",
    }
  );

  migracionEquipoEventoDeportivo.associate = (models) => {
    migracionEquipoEventoDeportivo.belongsTo(models.equipo, {
      foreignKey: {
        allowNull: false,
      },
    });
    migracionEquipoEventoDeportivo.belongsTo(models.eventoDeportivo, {
      foreignKey: { name: "eventoDeportivoOrigenId", allowNull: false },
    });
    migracionEquipoEventoDeportivo.belongsTo(models.eventoDeportivo, {
      foreignKey: { name: "eventoDeportivoDestinoId", allowNull: false },
    });
    migracionEquipoEventoDeportivo.belongsTo(models.usuario, {
      foreignKey: { name: "organizadorId", allowNull: false },
    });
  };

  return migracionEquipoEventoDeportivo;
};
