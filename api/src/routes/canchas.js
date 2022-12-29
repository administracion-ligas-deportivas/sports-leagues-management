import { Router } from "express";

import {
  deleteCancha,
  getCanchas,
  getCanchasById,
} from "../controllers/canchas.js";

const canchasRouter = Router();

canchasRouter.route("/").get(getCanchas);

canchasRouter.route("/:canchaId").get(getCanchasById).delete(deleteCancha);

export { canchasRouter };
