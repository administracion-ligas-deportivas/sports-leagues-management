const endpoint = "/canchas";

const canchas = {
  endpoint,
  name: "Canchas",
  description: "Canchas de un deportivo",
  methods: {
    GET: "Obtener todas las canchas del sistema",
  },
  parameters: [
    {
      name: "canchaId",
      endpoint: `${endpoint}/:canchaId`,
      methods: {
        GET: "Obtener una cancha por su id",
        DELETE: "Eliminar una cancha por su id",
      },
    },
  ],
};

module.exports = {
  canchas,
};
