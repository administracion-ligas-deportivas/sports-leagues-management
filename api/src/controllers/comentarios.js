const { Comentario } = require("../db/models");

const getCommentsByPostId = async (req, res) => {
  const { postId } = req.params;

  const comentarios = await Comentario.findAll({
    where: { AnuncioId: postId },
  });
  console.log(
    "🚀 ~ file: comentarios.js ~ line 13 ~ router.get ~ comentarios",
    { comentarios }
  );
  res.json(comentarios);
};

const addPostComment = async (req, res) => {
  const { body, user } = req;
  const { nombre } = user;

  const comentario = { ...body, usuario: nombre };
  const newComment = await Comentario.create(comentario);

  res.json(newComment);
};

const deleteCommentById = async (req, res) => {
  const { params } = req;
  const { commentId } = req.params;
  console.log("🚀 ~ file: comentarios.js ~ line 30 ~ router.delete ~ req", {
    params,
  });

  await Comentario.destroy({
    where: {
      id: commentId,
    },
  });

  res.json({ message: "Correct delete" });
};

module.exports = { getCommentsByPostId, addPostComment, deleteCommentById };
