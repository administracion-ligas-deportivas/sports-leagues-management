const tipoEventoRouter = require("express").Router();

const { createTipoEvento } = require("../controllers/tiposDeEvento");

tipoEventoRouter.route("/").post(createTipoEvento);

module.exports = { tipoEventoRouter };
