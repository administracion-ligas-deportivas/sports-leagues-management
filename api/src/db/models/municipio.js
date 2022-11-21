module.exports = (sequelize, DataTypes) => {
  const municipio = sequelize.define(
    "municipio",
    {
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  municipio.associate = function (models) {
    municipio.belongsTo(models.estado, {
      foreignkey: {
        allowNull: false,
      },
    });
    municipio.hasMany(models.deportivo);
    municipio.hasMany(models.domicilioUsuario);
  };
  return municipio;
};
