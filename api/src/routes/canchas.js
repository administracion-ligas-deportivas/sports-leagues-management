const canchasRouter = require("express").Router();

const { getCanchas, getCanchasById } = require("../controllers/canchas");

canchasRouter.route("/").get(getCanchas);

canchasRouter.route("/:canchasId").get(getCanchasById);

module.exports = { canchasRouter };
