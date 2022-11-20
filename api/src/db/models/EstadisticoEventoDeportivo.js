module.exports = (sequelize, DataTypes) => {
  const EventoDeportivo = sequelize.define(
    "EstadisticoEventoDeportivo",
    {},
    {
      tableName: "estadistico_evento_deportivo",
    }
  );

  return EventoDeportivo;
};
