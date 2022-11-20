module.exports = (sequelize /* DataTypes */) => {
  const JugadorEquipo = sequelize.define("JugadorEquipo", {}, {});

  return JugadorEquipo;
};
