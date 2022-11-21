module.exports = (sequelize, DataTypes) => {
  const migracionEquipoEventoDeportivo = sequelize.define(
    "migracionEquipoEventoDeportivo",
    {
      eventoDeportivoOrigenId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      eventoDeportivoDestinoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      organizadorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fechaPeticion: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      fechaVeredicto: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      autorizado: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "migracion_equipo_evento_deportivo",
    }
  );

  migracionEquipoEventoDeportivo.associate = (models) => {
    migracionEquipoEventoDeportivo.belongsTo(models.equipo, {
      foreignKey: {
        name: "equipoId",
        allowNull: false,
      },
    });
    migracionEquipoEventoDeportivo.belongsTo(models.eventoDeportivo, {
      foreignKey: "eventoDeportivoOrigenId",
    });
    migracionEquipoEventoDeportivo.belongsTo(models.eventoDeportivo, {
      foreignKey: "eventoDeportivoDestinoId",
    });
    migracionEquipoEventoDeportivo.belongsTo(models.usuario, {
      foreignKey: "organizadorId",
    });
  };

  return migracionEquipoEventoDeportivo;
};
