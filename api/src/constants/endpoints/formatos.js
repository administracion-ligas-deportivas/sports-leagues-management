const endpoint = "/formatos";

// No está implementado.
const formatos = {
  endpoint,
  description: "Formato de evento deportivo",
  methods: {
    GET: "Obtener todos los formatos",
    POST: "Crear un formato"
  },
  parameters: [
    {
      name: "formatoId",
      endpoint: `${endpoint}/:formatoId`,
      methods: {
        GET: "Obtener un formato por su id",
      },
    },
  ],
};

module.exports = {
  formatos,
};
