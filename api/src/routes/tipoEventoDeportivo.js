const tipoEventoRouter = require("express").Router();

const { createTipoEvento } = require("#src/controllers/tiposDeEvento.js");

tipoEventoRouter.route("/").post(createTipoEvento);

module.exports = { tipoEventoRouter };
