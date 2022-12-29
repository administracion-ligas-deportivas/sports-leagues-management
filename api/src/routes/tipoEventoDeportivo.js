import { Router } from "express";

import { createTipoEvento } from "../controllers/tiposDeEvento.js";

const tipoEventoRouter = Router();

tipoEventoRouter.route("/").post(createTipoEvento);

export { tipoEventoRouter };
