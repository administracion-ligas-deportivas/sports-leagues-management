const SCOPE_NAMES = {
  withRol: "withRol",
  withDomicilio: "withDomicilio",
};

const getScopesUsuario = (models) => {
  const { rol, domicilioUsuario } = models;

  const SCOPES_EQUIPO = {
    defaultScope: {
      attributes: { exclude: ["password"] },
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

  const { withRol, withDomicilio } = SCOPES_EQUIPO;

  const SCOPES_TO_INCLUDE = [withRol, withDomicilio];

  return { SCOPES_EQUIPO, SCOPES_TO_INCLUDE };
};

module.exports = { getScopesUsuario, SCOPE_NAMES };
