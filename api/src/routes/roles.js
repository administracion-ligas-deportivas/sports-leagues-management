import { Router } from "express";

import { createRol, deleteRol, getRolId, getRoles } from "../controllers/roles.js";

const rolRouter = Router();

rolRouter.route("/").post(createRol).get(getRoles);

rolRouter.route("/:rolId").get(getRolId).delete(deleteRol);

export { rolRouter };
