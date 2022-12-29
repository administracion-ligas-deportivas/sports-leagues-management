import { Router } from "express";
import {
  createCancha,
  createDeportivo,
  deleteDeportivo,
  getCanchasFromDeportivo,
  getDeportivoById,
  getDeportivos,
  updateDeportivo,
} from "../controllers/deportivos.js";

const deportivosRouter = Router();

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

export { deportivosRouter };
