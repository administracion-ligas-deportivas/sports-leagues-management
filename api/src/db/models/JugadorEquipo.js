module.exports = (sequelize /* DataTypes */) => {
  const JugadorEquipo = sequelize.define(
    "JugadorEquipo",
    {},
    {
      tableName: "jugador_equipo",
    }
  );

  return JugadorEquipo;
};
