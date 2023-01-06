const { usuariosService } = require("#src/services/index.js");

const hasRoles = (...roles) => {
  return (req, res, next) => {
    if (!req?.user) {
      return res.status(401).json({ message: "El usuario no ha iniciado sesión" });
    }

    if (!usuariosService.userHasRoles(req.user, roles)) {
      return res.status(403).json({
        message: "El usuario requiere alguno de estos roles",
        roles: roles.join(","),
        usuarioId: req.user.id,
        rolUsuario: req.user.rol,
      });
    }

    next();
  };
};

module.exports = {
  hasRoles,
};
