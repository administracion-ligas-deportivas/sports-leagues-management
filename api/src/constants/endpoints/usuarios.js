const usuarios = {
  endpoint: "/usuarios",
  description: "Obtener todos los usuarios",
  methods: {
    GET: "Obtener todos los usuarios",
    POST: "Crear un usuario",
  },
  parameters: [
    {
      name: "id",
      endpoint: "/usuarios/:usuarioId",
      description: "Obtener un usuario por su id",
      methods: ["GET"],
    },
    {
      name: "verify",
      endpoint: "/usuarios/verify",
      description: "Verificar la sesión del usuario",
      methods: ["GET"],
    },
  ],
};

module.exports = {
  usuarios,
};
