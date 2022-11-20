module.exports = (sequelize, DataTypes) => {
  const eventoDeportivo = sequelize.define(
    "EstadisticoEventoDeportivo",
    {},
    {
      tableName: "estadistico_evento_deportivo",
    }
  );

  return eventoDeportivo;
};
