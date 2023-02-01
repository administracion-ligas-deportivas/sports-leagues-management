const endpoint = "/partidos";

const partidos = {
  endpoint,
  name: "Partidos",
  description: "Partidos de un evento deportivo",
  methods: {
    GET: "Obtener todos los partidos",
  },
  parameters: [
    {
      name: "partidoId",
      endpoint: `${endpoint}/:partidoId`,
      description: "Obtener un partido por su id",
      methods: {
        GET: "Obtener un partido por su id",
        DELETE: "Eliminar un partido por su id",
      },
    },
  ],
};

module.exports = {
  partidos,
};
