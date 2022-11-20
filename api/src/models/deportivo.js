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
    {
      paranoid: true,
    }
  );

  Deportivo.associate = (models) => {
    Deportivo.belongsTo(models.Municipio);
    Deportivo.hasMany(models.Cancha);
  };
  return Deportivo;
};
