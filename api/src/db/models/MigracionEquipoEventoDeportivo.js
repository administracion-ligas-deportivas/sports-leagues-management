module.exports = (sequelize, DataTypes) => {
  const MigracionEquipoEventoDeportivo = sequelize.define(
    "MigracionEquipoEventoDeportivo",
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
      paranoid: true,
    }
  );

  MigracionEquipoEventoDeportivo.associate = (models) => {
    MigracionEquipoEventoDeportivo.belongsTo(models.Equipo);
    MigracionEquipoEventoDeportivo.belongsTo(models.EventoDeportivo, {
      foreignKey: "eventoDeportivoOrigenId",
    });
    MigracionEquipoEventoDeportivo.belongsTo(models.EventoDeportivo, {
      foreignKey: "eventoDeportivoDestinoId",
    });
    MigracionEquipoEventoDeportivo.belongsTo(models.Usuario, {
      foreignKey: "organizadorId",
    });
  };

  return MigracionEquipoEventoDeportivo;
};
