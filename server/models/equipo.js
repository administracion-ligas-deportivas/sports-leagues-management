module.exports = (sequelize, DataTypes) => {
  const equipo = sequelize.define("equipo", {
    partido_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  //Pendiente agregar relacion a tabla partido
  /* equipo.associate = (models) => {
    equipo.belongsTo(models.partido, {
      foreignKey: "partido_id",
      as: "equipo_partido_id",
    });
  }; */
  return equipo;
};
