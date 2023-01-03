const SCOPE_NAMES = {
  defaultScope: "defaultScope",
  withDomicilio: "withDomicilio",
  withRol: "withRol",
  withPasswordHash: "withPasswordHash",
};

const getScopesUsuario = (models) => {
  const { rol, domicilioUsuario } = models;

  const SCOPES_USUARIO = {
    defaultScope: {
      attributes: { exclude: ["password"] },
    },
    withPasswordHash: {
      name: SCOPE_NAMES.withPasswordHash,
      scope: { attributes: { include: ["password"] } },
    },
    withRol: {
      name: SCOPE_NAMES.withRol,
      scope: {
        include: rol,
        attributes: {
          exclude: ["rolId"],
        },
      },
    },
    withDomicilio: {
      name: SCOPE_NAMES.withDomicilio,
      scope: {
        include: domicilioUsuario,
      },
    },
  };

  const SCOPES_TO_INCLUDE = Object.values(SCOPES_USUARIO);

  return { SCOPES_USUARIO, SCOPES_TO_INCLUDE };
};

module.exports = { getScopesUsuario, SCOPE_NAMES };
