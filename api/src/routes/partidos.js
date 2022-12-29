import { Router } from "express";

import {
  deletePartido,
  getPartidoById,
  getPartidos,
} from "../controllers/partidos.js";

const partidosRouter = Router();

partidosRouter.route("/").get(getPartidos);
partidosRouter.route("/:partidoId").get(getPartidoById).delete(deletePartido);

export { partidosRouter };
