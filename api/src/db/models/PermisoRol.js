module.exports = (sequelize /* DataTypes */) => {
  const permisoRol = sequelize.define(
    "permisoRol",
    {},
    { tableName: "permiso_rol" }
  );

  permisoRol.associate = (models) => {
    permisoRol.belongsTo(models.rol);
    permisoRol.belongsTo(models.permiso);
  };
  return permisoRol;
};
