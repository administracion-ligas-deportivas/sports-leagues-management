const express = require("express");
const likesRouter = express.Router();
const { likePost } = require("../controllers/likes.js");
const { userAuthenticator } = require("../middlewares/userAuthenticator.js");

likesRouter.post("/", userAuthenticator, likePost);

module.exports = { likesRouter };
