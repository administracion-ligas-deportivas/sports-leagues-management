module.exports = (sequelize, DataTypes) => {
  const PermisoRol = sequelize.define(
    "PermisoRol",
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

  PermisoRol.associate = (models) => {
    PermisoRol.belongsTo(models.rol, {
      foreignKey: "rol_id",
    });
    PermisoRol.belongsTo(models.permiso, {
      foreignKey: "permiso_id",
    });
  };
  return PermisoRol;
};
