module.exports = (sequelize, DataTypes) => {
  const migracion_equipo_evento_deportivo = sequelize.define(
    "migracion_equipo_evento_deportivo",
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
    }
  );

  migracion_equipo_evento_deportivo.associate = (models) => {
    migracion_equipo_evento_deportivo.belongsTo(models.equipo, {
      foreignKey: "equipo_id",
    });
    migracion_equipo_evento_deportivo.belongsTo(models.evento_deportivo, {
      foreignKey: "evento_deportivo_origen_id",
    });
    migracion_equipo_evento_deportivo.belongsTo(models.evento_deportivo, {
      foreignKey: "evento_deportivo_destino_id",
    });
    migracion_equipo_evento_deportivo.belongsTo(models.Usuario, {
      foreignKey: "organizador_id",
    });
  };

  return migracion_equipo_evento_deportivo;
};
