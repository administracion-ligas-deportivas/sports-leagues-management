module.exports = (sequelize, DataTypes) => {
  const permiso_rol = sequelize.define(
    "permiso_rol",
    {
      rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      permiso_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  permiso_rol.associate = (models) => {
    permiso_rol.belongsTo(models.rol, {
      foreignKey: "rol_id",
    });
    permiso_rol.belongsTo(models.permiso, {
      foreignKey: "permiso_id",
    });
  };
  return permiso_rol;
};
