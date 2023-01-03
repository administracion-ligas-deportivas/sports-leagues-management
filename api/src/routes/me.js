const { verifyUser } = require("#src/controllers/usuarios.js");

const meRouter = require("express").Router();

meRouter.route("/").get(verifyUser);

module.exports = { meRouter };
