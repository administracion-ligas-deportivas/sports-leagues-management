const deportivosRouter = require("express").Router();
const {
  getDeportivos,
  createDeportivo,
  getDeportivoById,
  deleteDeportivo,
  updateDeportivo,
  getCanchasFromDeportivo,
  createCancha,
} = require("../controllers/deportivos");

deportivosRouter.route("/").get(getDeportivos).post(createDeportivo);
deportivosRouter
  .route("/:deportivoId")
  .get(getDeportivoById)
  .delete(deleteDeportivo)
  .put(updateDeportivo);

deportivosRouter
  .route("/:deportivoId/canchas")
  .get(getCanchasFromDeportivo)
  .post(createCancha);

module.exports = { deportivosRouter };
