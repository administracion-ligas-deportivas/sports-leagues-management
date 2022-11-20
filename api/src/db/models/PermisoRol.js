module.exports = (sequelize /* DataTypes */) => {
  const PermisoRol = sequelize.define("PermisoRol");

  PermisoRol.associate = (models) => {
    PermisoRol.belongsTo(models.Rol);
    PermisoRol.belongsTo(models.Permiso);
  };
  return PermisoRol;
};
