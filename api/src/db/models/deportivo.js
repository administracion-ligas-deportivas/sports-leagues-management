module.exports = (sequelize, DataTypes) => {
  const deportivo = sequelize.define(
    "deportivo",
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
      codigoPostal: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      numeroExterior: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numeroInterior: {
        type: DataTypes.STRING,
      },
    },
    {}
  );

  deportivo.associate = (models) => {
    deportivo.belongsTo(models.municipio, {
      foreignKey: {
        allowNull: false,
      },
    });
    deportivo.hasMany(models.cancha);
  };
  return deportivo;
};
