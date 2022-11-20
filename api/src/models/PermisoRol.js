module.exports = (sequelize /* DataTypes */) => {
  const PermisoRol = sequelize.define("PermisoRol", {
    paranoid: true,
  });

  PermisoRol.associate = (models) => {
    PermisoRol.belongsTo(models.rol);
    PermisoRol.belongsTo(models.permiso);
  };
  return PermisoRol;
};
