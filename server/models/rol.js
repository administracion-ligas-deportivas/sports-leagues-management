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
    rol.hasMany(models.permiso_rol, {
      foreignKey: "rol_id",
    });
    rol.hasMany(models.Usuario, {
      foreignKey: "rol_id",
    });
  };
  return rol;
};
