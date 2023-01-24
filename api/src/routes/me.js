const { authenticateUser } = require("#src/controllers/usuarios.js");
const { userAuthenticator } = require("#src/middlewares/index.js");

const meRouter = require("express").Router();

meRouter.use(userAuthenticator);

meRouter.route("/").get(authenticateUser);

module.exports = { meRouter };
