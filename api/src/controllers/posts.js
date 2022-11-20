const { anuncio, like } = require("../db/models");

const getPosts = async (req, res) => {
  const lista_anuncios = await anuncio.findAll({ include: [like] });

  const anuncios_liked = await like.findAll({
    where: {
      UsuarioId: req.user.id,
    },
  });

  res.json({ lista_anuncios, liked: anuncios_liked });
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

  const anuncio = await anuncio.create(data);
  res.json(anuncio);
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
