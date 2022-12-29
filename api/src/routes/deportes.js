import { Router } from "express";

import {
  createDeportes,
  deleteDeporte,
  getDeporteById,
  getDeportes,
} from "../controllers/deportes.js";

const deportesRouter = Router();

deportesRouter.route("/").get(getDeportes).post(createDeportes);
deportesRouter.route("/:deporteId").get(getDeporteById).delete(deleteDeporte);

export { deportesRouter };
