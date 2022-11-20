module.exports = (sequelize, DataTypes) => {
  const PagoEventoDeportivo = sequelize.define(
    "PagoEventoDeportivo",
    {
      monto: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      concepto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      formaPago: {
        type: DataTypes.ENUM("fisico", "digital"),
        allowNull: false,
      },
      notas: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {}
  );

  PagoEventoDeportivo.associate = (models) => {
    PagoEventoDeportivo.belongsTo(models.Usuario);

    PagoEventoDeportivo.belongsTo(models.EventoDeportivo);
    PagoEventoDeportivo.belongsTo(models.Equipo);
  };

  return PagoEventoDeportivo;
};
