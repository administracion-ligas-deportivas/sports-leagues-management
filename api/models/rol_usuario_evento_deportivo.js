module.exports = (sequelize, DataTypes) => {
  const rol_usuario_evento_deportivo = sequelize.define(
    "rol_usuario_evento_deportivo",
    {
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      evento_deportivo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  rol_usuario_evento_deportivo.associate = (models) => {
    rol_usuario_evento_deportivo.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
      as: "rol_usuario_evento_deportivo_usuario_id",
    });
    rol_usuario_evento_deportivo.belongsTo(models.rol, {
      foreignKey: "rol_id",
      as: "rol_usuario_evento_deportivo_rol_id",
    });
    rol_usuario_evento_deportivo.belongsTo(models.evento_deportivo, {
      foreignKey: "evento_deportivo_id",
      as: "rol_usuario_evento_deportivo_evento_deportivo_id",
    });
  };

  return rol_usuario_evento_deportivo;
};
