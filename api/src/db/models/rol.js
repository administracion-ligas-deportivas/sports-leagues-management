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
    rol.belongsToMany(models.permiso, {
      through: models.permisoRol,
    });
    rol.hasMany(models.usuario);
  };
  return rol;
};
