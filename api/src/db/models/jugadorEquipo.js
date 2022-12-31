module.exports = (sequelize /* DataTypes */) => {
  const jugadorEquipo = sequelize.define(
    "jugadorEquipo",
    {},
    {
      tableName: "jugador_equipo",
    }
  );

  jugadorEquipo.associate = () => {
    // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#specifying-attributes-for-select-queries
    // jugadorEquipo.addScope("numberOfJugadores", {
    //   attributes: {
    //     include: [
    //       // sequelize.fn("COUNT"),
    //       [
    //         sequelize.fn("COUNT", sequelize.col("jugador_equipo.equipo_id")),
    //         "numberOfJugadores",
    //       ],
    //     ],
    //   },
    //   // group: ["jugador_equipo.equipo_id"],
    // });
  };

  return jugadorEquipo;
};
