const endpoint = "/estados";

const estados = {
  endpoint,
  name: "Estados",
  description:
    "Estados del país. Cada estado tiene sus municipios, los cuales entre sus funciones tendrán la posibilidad de localizar los deportivos.",
  notes:
    "Solo debería haber métodos GET. Los estados solo se podrán registrar una vez al iniciar la base de datos.",
  methods: {
    GET: "Obtener todos los estados",
    POST: "Registrar múltiples estados con sus municipios",
  },
  parameters: [
    {
      name: "estadoId",
      endpoint: `${endpoint}/:estadoId`,
      description: "ID de estado",
      methods: null,
    },
    {
      name: "municipios",
      endpoint: `${endpoint}/:estadoId/municipios`,
      description: "Municipios de un estado",
      methods: {
        GET: "Obtener todos los municipios de un estado",
      },
    },
  ],
};

module.exports = {
  estados,
};
