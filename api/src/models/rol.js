module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define(
    "Rol",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );
  Rol.associate = (models) => {
    Rol.hasMany(models.PermisoRol, {
      foreignKey: "rol_id",
    });
    Rol.hasMany(models.Usuario, {
      foreignKey: "rol_id",
    });
  };
  return Rol;
};
