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
        type: DataTypes.STRING,
        allowNull: false,
      },
      numeroExterior: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numeroInterior: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  deportivo.associate = (models) => {
    deportivo.belongsTo(models.municipio, {
      foreignKey: {
        name: "municipioId",
        allowNull: false,
      },
    });
    deportivo.hasMany(models.cancha);
  };
  return deportivo;
};
