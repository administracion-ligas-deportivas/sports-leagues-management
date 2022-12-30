const rolRouter = require("express").Router();

const {
  createRol,
  getRoles,
  getRolId,
  deleteRol,
} = require("#src/controllers/roles.js");

rolRouter.route("/").post(createRol).get(getRoles);

rolRouter.route("/:rolId").get(getRolId).delete(deleteRol);

module.exports = { rolRouter };
