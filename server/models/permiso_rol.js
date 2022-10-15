module.exports = (sequelize, DataTypes) => {
  const permiso_rol = sequelize.define("permiso_rol", {
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    permiso_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  permiso_rol.associate = (models) => {
    permiso_rol.belongsTo(models.rol, {
      foreignKey: "rol_id",
      as: "permiso_rol_rol_id",
    });
    permiso_rol.belongsTo(models.permiso, {
      foreignKey: "permiso_id",
      as: "permiso_rol_permiso_id",
    });
  };
  return permiso_rol;
};
