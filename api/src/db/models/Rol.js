module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define("Rol", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Rol.associate = (models) => {
    Rol.hasMany(models.PermisoRol);
    Rol.hasMany(models.Usuario);
  };
  return Rol;
};
