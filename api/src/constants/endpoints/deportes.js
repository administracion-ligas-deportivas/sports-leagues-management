const endpoint = "/deportes";

const deportes = {
  endpoint,
  description: "Deportes disponibles",
  methods: {
    GET: "Obtener todos los deportes",
    POST: "Crear múltiples deportes",
  },
  parameters: [
    {
      name: "deporteId",
      endpoint: `${endpoint}/:deporteId`,
      methods: {
        GET: "Obtener un deporte por su id",
        DELETE: "Eliminar un deporte por su id",
      },
    },
  ],
};

module.exports = {
  deportes,
};
