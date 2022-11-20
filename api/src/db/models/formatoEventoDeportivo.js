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
    formatoEventoDeportivo.belongsTo(models.deporte);
    formatoEventoDeportivo.hasMany(models.eventoDeportivo);

    formatoEventoDeportivo.belongsTo(models.tipoEventoDeportivo);
    formatoEventoDeportivo.belongsTo(models.usuario);
  };

  return formatoEventoDeportivo;
};
