module.exports = (sequelize) => {
  const eventoDeportivo = sequelize.define(
    "estadisticoEventoDeportivo",
    {},
    {
      tableName: "estadistico_evento_deportivo",
    }
  );

  return eventoDeportivo;
};
