const { anuncio, like } = require("../db/models");

const getPosts = async (req, res) => {
  const listaAnuncios = await anuncio.findAll({ include: [like] });

  const anunciosLiked = await like.findAll({
    where: {
      usuarioId: req.user.id,
    },
  });

  res.json({ listaAnuncios, liked: anunciosLiked });
};

const getPostById = async (req, res) => {
  const { postId } = req.params;

  const post = await anuncio.findByPk(postId);
  res.json(post);
};

const createPost = async (req, res) => {
  const { body, user } = req;
  const { correo } = user;

  const data = { ...body, autor: correo };

  const newPost = await anuncio.create(data);
  res.json(newPost);
};

const deletePostById = async (req, res) => {
  const { postId } = req.params;

  await anuncio.destroy({
    where: {
      id: postId,
    },
  });

  res.json("Correct delete");
};

module.exports = { getPosts, getPostById, createPost, deletePostById };
