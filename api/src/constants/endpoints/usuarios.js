const endpoint = "/usuarios";

const usuarios = {
  endpoint,
  description: "Obtener todos los usuarios",
  methods: {
    GET: "Obtener todos los usuarios",
    POST: "Crear un usuario",
  },
  parameters: [
    {
      name: "usuarioId",
      endpoint: `${endpoint}/:usuarioId`,
      description: "Obtener un usuario por su id",
      methods: ["GET"],
    },
    {
      name: "verify",
      endpoint: `${endpoint}/verify`,
      description: "Verificar la sesión del usuario",
      methods: ["GET"],
    },
  ],
};

module.exports = {
  usuarios,
};
