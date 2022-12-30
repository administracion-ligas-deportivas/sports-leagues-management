const deportesRouter = require("express").Router();

const {
  getDeportes,
  createDeportes,
  deleteDeporte,
  getDeporteById,
} = require("#src/controllers/deportes.js");

deportesRouter.route("/").get(getDeportes).post(createDeportes);
deportesRouter.route("/:deporteId").get(getDeporteById).delete(deleteDeporte);

module.exports = { deportesRouter };
