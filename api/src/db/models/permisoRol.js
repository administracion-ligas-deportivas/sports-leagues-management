module.exports = (sequelize /* DataTypes */) => {
  const permisoRol = sequelize.define(
    "permisoRol",
    {},
    { tableName: "permiso_rol" }
  );

  permisoRol.associate = (models) => {
    permisoRol.belongsTo(models.rol, {
      foreignKey: {
        name: "rolId",
        allowNull: false,
      },
    });
    permisoRol.belongsTo(models.permiso, {
      foreignKey: {
        name: "permisoId",
        allowNull: false,
      },
    });
  };
  return permisoRol;
};
