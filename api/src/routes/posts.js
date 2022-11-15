const express = require("express");
const postsRouter = express.Router();
const { userAuthenticator } = require("../middlewares/userAuthenticator.js");
const {
  getPosts,
  getPostById,
  createPost,
  deletePostById,
} = require("../controllers/posts.js");

// Add middleware to every route
postsRouter.use(userAuthenticator);

postsRouter.route("/").get(getPosts).post(createPost);
postsRouter.route("/:postId").get(getPostById).delete(deletePostById);

module.exports = { postsRouter };
