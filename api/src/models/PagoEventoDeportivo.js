module.exports = (sequelize, DataTypes) => {
  const PagoEventoDeportivo = sequelize.define(
    "PagoEventoDeportivo",
    {
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      evento_deportivo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      equipo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
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
      forma_pago: {
        type: DataTypes.ENUM("fisico", "digital"),
        allowNull: false,
      },
      notas: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      paranoid: true,
    }
  );

  PagoEventoDeportivo.associate = (models) => {
    PagoEventoDeportivo.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
    });

    PagoEventoDeportivo.belongsTo(models.EventoDeportivo, {
      foreignKey: "evento_deportivo_id",
    });
    PagoEventoDeportivo.belongsTo(models.Equipo, {
      foreignKey: "equipo_id",
    });
  };

  return PagoEventoDeportivo;
};
