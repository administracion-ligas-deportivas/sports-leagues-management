module.exports = (sequelize /* DataTypes */) => {
  const JugadorEquipo = sequelize.define(
    "JugadorEquipo",
    {},
    {
      paranoid: true,
    }
  );

  return JugadorEquipo;
};
