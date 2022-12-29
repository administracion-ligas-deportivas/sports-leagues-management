import { Router } from "express";

import { getEquipoById, getEquipos } from "../controllers/equipos.js";

const equiposRouter = Router();

equiposRouter.route("/").get(getEquipos);

equiposRouter.route("/:equipoId").get(getEquipoById);

export { equiposRouter };
