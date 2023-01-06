const canchasRouter = require("express").Router();

const {
  getCanchas,
  getCanchasById,
  deleteCancha,
} = require("#src/controllers/canchas.js");

// /api/canchas/
canchasRouter.route("/").get(getCanchas);

// /api/canchas/:canchaId
canchasRouter.route("/:canchaId").get(getCanchasById).delete(deleteCancha);

module.exports = { canchasRouter };
