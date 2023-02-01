const tiposDeEventoRouter = require("express").Router();

const { createTipoEvento } = require("#src/controllers/tiposDeEvento.js");

tiposDeEventoRouter.route("/").post(createTipoEvento);

module.exports = { tiposDeEventoRouter };
