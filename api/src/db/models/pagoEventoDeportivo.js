const { FORMA_PAGO } = require("#src/constants/pagos.js");

module.exports = (sequelize, DataTypes) => {
  const pagoEventoDeportivo = sequelize.define(
    "pagoEventoDeportivo",
    {
      monto: {
        type: DataTypes.DECIMAL(10, 2),
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
        type: DataTypes.ENUM(FORMA_PAGO.FISICO, FORMA_PAGO.DIGITAL),
        allowNull: false,
      },
      notas: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: "pago_evento_deportivo",
    }
  );

  pagoEventoDeportivo.associate = (models) => {
    pagoEventoDeportivo.belongsTo(models.usuario, {
      foreignKey: {
        name: "encargadoEquipoId",
        allowNull: false,
      },
    });

    pagoEventoDeportivo.belongsTo(models.eventoDeportivo, {
      foreignKey: {
        allowNull: false,
      },
    });

    pagoEventoDeportivo.belongsTo(models.equipo, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return pagoEventoDeportivo;
};
