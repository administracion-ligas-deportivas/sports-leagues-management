module.exports = (sequelize, DataTypes) => {
  const rol_usuario = sequelize.define("rol_usuario", {
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  rol_usuario.associate = (models) => {
    rol_usuario.belongsTo(models.rol, {
      foreignKey: "rol_id",
      as: "rol_usuario_rol_id",
    });
    rol_usuario.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
      as: "rol_usuario_usuario_id",
    });
  };
  return rol_usuario;
};
