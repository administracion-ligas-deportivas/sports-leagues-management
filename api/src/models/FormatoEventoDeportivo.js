module.exports = (sequelize, DataTypes) => {
  const FormatoEventoDeportivo = sequelize.define(
    "FormatoEventoDeportivo",
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
      paranoid: true,
    }
  );

  FormatoEventoDeportivo.associate = (models) => {
    FormatoEventoDeportivo.belongsTo(models.Deporte);
    FormatoEventoDeportivo.hasMany(models.EventoDeportivo);

    FormatoEventoDeportivo.belongsTo(models.tipo_evento_deportivo);
    FormatoEventoDeportivo.belongsTo(models.Usuario);
  };

  return FormatoEventoDeportivo;
};
