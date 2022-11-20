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
    {}
  );

  FormatoEventoDeportivo.associate = (models) => {
    FormatoEventoDeportivo.belongsTo(models.Deporte);
    FormatoEventoDeportivo.hasMany(models.EventoDeportivo);

    FormatoEventoDeportivo.belongsTo(models.TipoEventoDeportivo);
    FormatoEventoDeportivo.belongsTo(models.Usuario);
  };

  return FormatoEventoDeportivo;
};
