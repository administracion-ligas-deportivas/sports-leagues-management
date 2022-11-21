module.exports = (sequelize /* DataTypes */) => {
  const permisoRol = sequelize.define(
    "permisoRol",
    {},
    { tableName: "permiso_rol" }
  );

  return permisoRol;
};
