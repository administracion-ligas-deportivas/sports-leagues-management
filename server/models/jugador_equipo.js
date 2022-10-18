module.exports = (sequelize, DataTypes) => {
  const jugador_equipo = sequelize.define("jugador_equipo", {
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    equipo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  jugador_equipo.associate = (models) => {
    jugador_equipo.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
      as: "jugador_equipo_usuario_id",
    });
    jugador_equipo.belongsTo(models.equipo, {
      foreignKey: "equipo_id",
      as: "jugador_equipo_equipo_id",
    });
  };
  return jugador_equipo;
};