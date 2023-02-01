const endpoint = "/equipos";

const equipos = {
  endpoint,
  name: "Equipos",
  description:
    "Equipos de un deporte. Pueden participar en uno o más eventos deportivos.",
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
