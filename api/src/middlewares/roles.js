const { usuariosService } = require("#src/services/index.js");

const hasRoles = (...roles) => {
  return (req, res, next) => {
    const { user } = req || {};

    if (!user) {
      return res
        .status(401)
        .json({ error: "El usuario no ha iniciado sesión" });
    }

    if (!usuariosService.userHasRoles(user, roles)) {
      const { id, rol } = user || {};

      return res.status(403).json({
        message: "El usuario requiere alguno de estos roles",
        expectedRoles: roles,
        usuario: {
          id,
          rol,
        },
      });
    }

    next();
  };
};

module.exports = {
  hasRoles,
};
