const formatosRouter = require("express").Router();

const {
  getFormatos,
  getFormatoById,
  createFormatoEvento,
} = require("#src/controllers/formatoEventoDeportivo.js");
const { userAuthenticator, hasRoles } = require("#src/middlewares/index.js");

const { ROLES } = require("#src/constants/index.js");

formatosRouter.use(userAuthenticator);

formatosRouter
  .route("/")
  .get(getFormatos)
  .post([hasRoles(ROLES.ORGANIZADOR)], createFormatoEvento);

formatosRouter.route("/:formatoId").get(getFormatoById);

module.exports = { formatosRouter };
