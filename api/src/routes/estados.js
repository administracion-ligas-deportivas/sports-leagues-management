import { Router } from "express";
import {
  eliminarEstados,
  getEstados,
  getMunicipiosDeEstado,
  registrarEstados,
} from "../controllers/estados.js";

const estadosRouter = Router();

estadosRouter.post("/", registrarEstados);
estadosRouter.get("/", getEstados);
estadosRouter.get("/:estadoId/municipios", getMunicipiosDeEstado);
// estadosRouter.delete("/", eliminarEstados);

export { estadosRouter };
