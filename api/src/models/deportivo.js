module.exports = (sequelize, DataTypes) => {
  const deportivo = sequelize.define(
    "deportivo",
    {
      municipio_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
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

  deportivo.associate = (models) => {
    deportivo.belongsTo(models.Municipio, {
      foreignKey: "municipio_id",
    });
    deportivo.hasMany(models.cancha, {
      foreignKey: "deportivo_id",
    });
  };
  return deportivo;
};
