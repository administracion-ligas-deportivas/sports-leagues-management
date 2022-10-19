module.exports = (sequelize, DataTypes) => 
{
  const Municipio = sequelize.define("Municipio", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado_id:
        {
          type: DataTypes.INTEGER,
          allowNull: false
        }
  });

  Municipio.assosiate = function(models){
    Municipio.belongsTo(models.Estado, {foreignKey: "estado_id", as: "municipio_estado_id"});
  };

  Municipio.assosiate = function(models) {
    Municipio.hasMany(models.Usuario, {as: "usuarios"});
  };

  return Municipio;
};
