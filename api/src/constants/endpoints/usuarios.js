const endpoint = "/usuarios";

const usuarios = {
  endpoint,
  name: "Usuarios",
  description: "Usuarios del sistema. Cada usuario tendrá un rol.",
  methods: {
    GET: "Obtener todos los usuarios",
    POST: "Crear un usuario",
  },
  parameters: [
    {
      name: "usuarioId",
      endpoint: `${endpoint}/:usuarioId`,
      description: "ID de usuario",
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
