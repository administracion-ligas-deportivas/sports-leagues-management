module.exports = (sequelize, DataTypes) => {
  const permiso = sequelize.define("permiso", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  permiso.associate = (models) => {
    permiso.belongsToMany(models.rol, {
      through: models.permisoRol,
    });
  };
  return permiso;
};
