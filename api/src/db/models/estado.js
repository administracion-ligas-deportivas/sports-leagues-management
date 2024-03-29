module.exports = (sequelize, DataTypes) => {
  const estado = sequelize.define(
    "estado",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );

  estado.associate = function (models) {
    estado.hasMany(models.municipio);
  };

  return estado;
};
