module.exports = (sequelize, DataTypes) => {
  const MigracionEquipoEventoDeportivo = sequelize.define(
    "MigracionEquipoEventoDeportivo",
    {
      equipo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      evento_deportivo_origen_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      evento_deportivo_destino_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      organizador_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fecha_peticion: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      fecha_veredicto: {
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
    MigracionEquipoEventoDeportivo.belongsTo(models.Equipo, {
      foreignKey: "equipo_id",
    });
    MigracionEquipoEventoDeportivo.belongsTo(models.EventoDeportivo, {
      foreignKey: "evento_deportivo_origen_id",
    });
    MigracionEquipoEventoDeportivo.belongsTo(models.EventoDeportivo, {
      foreignKey: "evento_deportivo_destino_id",
    });
    MigracionEquipoEventoDeportivo.belongsTo(models.Usuario, {
      foreignKey: "organizador_id",
    });
  };

  return MigracionEquipoEventoDeportivo;
};
