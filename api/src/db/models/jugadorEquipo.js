module.exports = (sequelize /* DataTypes */) => {
  const jugadorEquipo = sequelize.define(
    "jugadorEquipo",
    {},
    {
      tableName: "jugador_equipo",
    }
  );

  return jugadorEquipo;
};
