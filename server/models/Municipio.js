module.exports = (sequelize, DataTypes) => {
  const Municipio = sequelize.define("Municipio", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Municipio.assosiate = function (models) {
    Municipio.hasMany(models.domicilio_usuario, { as: "domicilio_usuario" });
  };
  Municipio.assosiate = function (models) {
    Municipio.belongsTo(models.Estado);
  };

  Municipio.assosiate = function (models) {
    Municipio.hasMany(models.Usuario, { as: "usuario" });
  };
  return Municipio;
};
