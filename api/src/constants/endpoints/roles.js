const endpoint = "/roles";

const roles = {
  endpoint,
  name: "Roles",
  description:
    "Roles que regirán los permisos que tendrá un usuario en el sistema. Solo un administrador puede crear roles. Un rol puede tener múltiples permisos.",
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
