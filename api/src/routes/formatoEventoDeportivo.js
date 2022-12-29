import { Router } from "express";

import {
  createFormatoEvento,
  getFormatoById,
  getFormatoEvento,
} from "../controllers/formatoEventoDeportivo.js";

const formatosRouter = Router();

formatosRouter.route("/").get(getFormatoEvento).post(createFormatoEvento);

formatosRouter.route("/:formatoId").get(getFormatoById);

export { formatosRouter };
