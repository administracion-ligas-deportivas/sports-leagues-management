const endpoint = "/eventos";

const eventos = {
  endpoint,
  name: "Eventos",
  description:
    "Todos los eventos deportivos. Un evento tiene diferentes partidos, equipos, migraciones, pagos, estadísticas y estadísticos (quienes registran resultados de los partidos y estadísticas de jugador).",
  methods: {
    GET: "Obtener todos los eventos",
    POST: "Crear un evento",
  },
  parameters: [
    {
      name: "eventoId",
      endpoint: `${endpoint}/:eventoId`,
      description: "ID de evento",
      methods: {
        GET: "Obtener un evento por su id",
        DELETE: "Eliminar un evento por su id",
      },
    },
    {
      name: "estadisticos",
      endpoint: `${endpoint}/:eventoId/estadisticos`,
      description: "Estadísticos de un evento",
      methods: {
        GET: "Obtener todos los estadisticos de un evento",
      },
    },
    {
      name: "formatos",
      endpoint: `${endpoint}/:eventoId/formatos`,
      description: "Formatos de un evento",
      methods: {
        GET: "Obtener todos los formatos de un evento",
      },
    },
    {
      name: "pagos",
      endpoint: `${endpoint}/:eventoId/pagos`,
      description: "Pagos de un evento",
      methods: {
        GET: "Obtener todos los pagos de un evento",
      },
    },
    {
      name: "partidos",
      endpoint: `${endpoint}/:eventoId/partidos`,
      description: "Partidos de un evento",
      methods: {
        GET: "Obtener todos los partidos de un evento",
        POST: "Crear un partido en un evento",
      },
    },
    {
      name: "equipos",
      endpoint: `${endpoint}/:eventoId/equipos`,
      description: "Equipos de un evento",
      methods: {
        GET: "Obtener todos los equipos de un evento",
      },
    },
    {
      name: "equipoId",
      endpoint: `${endpoint}/:eventoId/equipos/:equipoId`,
      methods: null,
      description: "Recursos respecto a un equipo dentro de un evento",
      parameters: [
        {
          name: "pagos",
          endpoint: `${endpoint}/:eventoId/equipos/:equipoId/pagos`,
          methods: {
            GET: "Obtener todos los pagos de un equipo en un evento",
            POST: "Realizar pago de un equipo en un evento",
          },
        },
      ],
    },
  ],
};

module.exports = { eventos };
