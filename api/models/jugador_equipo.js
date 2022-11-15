module.exports = (sequelize /* DataTypes */) => {
  const jugador_equipo = sequelize.define(
    "jugador_equipo",
    {},
    {
      paranoid: true,
    }
  );

  return jugador_equipo;
};
