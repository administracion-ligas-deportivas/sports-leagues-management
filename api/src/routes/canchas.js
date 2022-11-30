const canchasRouter = require("express").Router();

const {
  getCanchas,
  getCanchasById,
  deleteCancha,
} = require("../controllers/canchas");

canchasRouter.route("/").get(getCanchas);

canchasRouter.route("/:canchaId").get(getCanchasById).delete(deleteCancha);

module.exports = { canchasRouter };
