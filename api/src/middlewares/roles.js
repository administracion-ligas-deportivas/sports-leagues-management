const { usuariosService } = require("#src/services/index.js");

const hasRoles = (...roles) => {
  return (req, res, next) => {
    if (!req?.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!usuariosService.userHasRoles(req.user, roles)) {
      return res.status(403).json({
        message: "El usuario requiere alguno de estos roles",
        roles: roles.join(","),
      });
    }

    next();
  };
};

module.exports = {
  hasRoles,
};
