const endpoint = "/formatos";

// No está implementado.
const formatos = {
  endpoint,
  name: "Formatos de evento",
  description:
    "Formatos disponibles para los eventos deportivos. Es la forma en que se llevará a cabo un evento. Son creados por un organizador de evento y están ligados a un deporte. Esto permite reutilizar los formats de un organizador en cualquier evento.",
  methods: {
    GET: "Obtener todos los formatos",
    POST: "Crear un formato",
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
