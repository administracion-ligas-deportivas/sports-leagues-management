module.exports = (sequelize) => {
  const equipoEventoDeportivo = sequelize.define(
    "equipoEventoDeportivo",
    {},
    {
      tableName: "equipo_evento_deportivo",
    }
  );

  return equipoEventoDeportivo;
};
