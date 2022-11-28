const formatosRouter = require("express").Router();

const {
  getFormatoEvento,
  getFormatoById,
  createFormatoEvento,
} = require("../controllers/formatoEventoDeportivo");

formatosRouter.route("/").get(getFormatoEvento).post(createFormatoEvento);

formatosRouter.route("/:formatoId").get(getFormatoById);

module.exports = { formatosRouter };
