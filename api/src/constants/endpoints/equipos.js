const endpoint = "/equipos";

const equipos = {
  endpoint,
  description: "Deportes disponibles",
  methods: {
    GET: "Obtener todos los equipos",
  },
  parameters: [
    {
      name: "equipoId",
      endpoint: `${endpoint}/:equipoId`,
      methods: {
        GET: "Obtener un equipo por su id",
      },
    },
  ],
};

module.exports = {
  equipos,
};
