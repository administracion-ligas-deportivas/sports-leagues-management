module.exports = (sequelize, DataTypes) => {
  const Deportivo = sequelize.define(
    "Deportivo",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      calle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      colonia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      codigo_postal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numero_exterior: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numero_interior: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  Deportivo.associate = (models) => {
    Deportivo.belongsTo(models.Municipio, {
      foreignKey: "municipio_id",
    });
    Deportivo.hasMany(models.Cancha, {
      foreignKey: "deportivo_id",
    });
  };
  return Deportivo;
};
