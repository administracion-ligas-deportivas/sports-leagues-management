module.exports = (sequelize, DataTypes) => {
  const formatoEventoDeportivo = sequelize.define(
    "formatoEventoDeportivo",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      maximoEquipos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "formato_evento_deportivo",
    }
  );

  formatoEventoDeportivo.associate = (models) => {
    formatoEventoDeportivo.belongsTo(models.deporte, {
      foreignKey: {
        allowNull: false,
      },
    });
    formatoEventoDeportivo.belongsTo(models.tipoEventoDeportivo, {
      foreignKey: {
        allowNull: false,
      },
    });
    formatoEventoDeportivo.belongsTo(models.usuario, {
      foreignKey: {
        name: "organizadorId",
        allowNull: false,
      },
    });

    formatoEventoDeportivo.hasMany(models.eventoDeportivo);
  };

  return formatoEventoDeportivo;
};
