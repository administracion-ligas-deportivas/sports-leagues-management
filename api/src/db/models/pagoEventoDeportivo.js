module.exports = (sequelize, DataTypes) => {
  const pagoEventoDeportivo = sequelize.define(
    "pagoEventoDeportivo",
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
    {
      tableName: "pago_evento_deportivo",
    }
  );

  pagoEventoDeportivo.associate = (models) => {
    pagoEventoDeportivo.belongsTo(models.usuario);

    pagoEventoDeportivo.belongsTo(models.eventoDeportivo);
    pagoEventoDeportivo.belongsTo(models.equipo);
  };

  return pagoEventoDeportivo;
};
