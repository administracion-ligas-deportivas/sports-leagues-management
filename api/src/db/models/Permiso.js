module.exports = (sequelize, DataTypes) => {
  const Permiso = sequelize.define("Permiso", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Permiso.associate = (models) => {
    Permiso.hasMany(models.PermisoRol, {
      foreignKey: "permiso_id",
    });
  };
  return Permiso;
};
