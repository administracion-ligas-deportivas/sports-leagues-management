const rolesRouter = require("express").Router();

const {
  createRol,
  getRoles,
  getRolById,
  deleteRol,
} = require("#src/controllers/roles.js");

rolesRouter.route("/").post(createRol).get(getRoles);

rolesRouter.route("/:rolId").get(getRolById).delete(deleteRol);

module.exports = { rolesRouter };
