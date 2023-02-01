const endpoint = "/deportivos";

const deportivos = {
  endpoint,
  name: "Deportivos",
  description:
    "Un deportivo tiene canchas, que es en donde se lleva a cabo un partido.",
  methods: {
    GET: "Obtener todos los deportivos",
    POST: "Crear un deportivo",
  },
  parameters: [
    {
      name: "deportivoId",
      endpoint: `${endpoint}/:deportivoId`,
      methods: {
        GET: "Obtener un deportivo por su id",
        DELETE: "Eliminar un deportivo por su id",
        PUT: "Actualizar un deportivo por su id",
      },
    },
    {
      name: "canchas",
      endpoint: `${endpoint}/:deportivoId/canchas`,
      methods: {
        GET: "Obtener todas las canchas de un deportivo",
        POST: "Crear una cancha de un deportivo",
      },
    },
  ],
};

module.exports = {
  deportivos,
};
