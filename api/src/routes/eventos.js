import { Router } from "express";

import {
  createEvento,
  deleteEvento,
  getEventoById,
  getEventos,
  getFormatoEvento,
  getPartidosFromEvento,
} from "../controllers/eventos.js";

const eventosRouter = Router();

// /api/eventos
eventosRouter.route("/").get(getEventos).post(createEvento);
// /api/eventos/:eventoId
eventosRouter.route("/:eventoId").get(getEventoById).delete(deleteEvento);
// /api/eventos/:eventoId/partidos
eventosRouter.route("/:eventoId/partidos").get(getPartidosFromEvento);
// /api/eventos/:eventoId/formatos
eventosRouter.route("/:eventoId/formatos").get(getFormatoEvento);

export { eventosRouter };
