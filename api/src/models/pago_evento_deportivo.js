module.exports = (sequelize, DataTypes) => {
  const pago_evento_deportivo = sequelize.define(
    "pago_evento_deportivo",
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

  pago_evento_deportivo.associate = (models) => {
    pago_evento_deportivo.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
    });

    pago_evento_deportivo.belongsTo(models.evento_deportivo, {
      foreignKey: "evento_deportivo_id",
    });
    pago_evento_deportivo.belongsTo(models.Equipo, {
      foreignKey: "equipo_id",
    });
  };

  return pago_evento_deportivo;
};
