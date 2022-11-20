module.exports = (sequelize, DataTypes) => {
  const rol = sequelize.define("rol", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  rol.associate = (models) => {
    rol.hasMany(models.permisoRol);
    rol.hasMany(models.usuario);
  };
  return rol;
};
