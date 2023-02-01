const endpoint = "/roles";

const roles = {
  endpoint,
  description: "Roles de usuario. Cada rol tiene permisos.",
  methods: {
    GET: "Obtener todos los roles",
    POST: "Crear un rol",
  },
  parameters: [
    {
      name: "rolId",
      endpoint: `${endpoint}/:rolId`,
      description: "ID de rol",
      methods: {
        GET: "Obtener un rol por su id",
        DELETE: "Eliminar un rol por su id",
      },
    },
  ],
};

module.exports = {
  roles,
};
