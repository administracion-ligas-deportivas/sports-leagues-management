const { Anuncio, Likes } = require("../models");

const getPosts = async (req, res) => {
  const lista_anuncios = await Anuncio.findAll({ include: [Likes] });

  const anuncios_liked = await Likes.findAll({
    where: {
      UsuarioId: req.user.id,
    },
  });

  res.json({ lista_anuncios: lista_anuncios, liked: anuncios_liked });
};

const getPostById = async (req, res) => {
  const { postId } = req.params;

  const post = await Anuncio.findByPk(postId);
  res.json(post);
};

const createPost = async (req, res) => {
  const { body, user } = req;
  const { correo } = user;

  const data = { ...body, autor: correo };

  const anuncio = await Anuncio.create(data);
  res.json(anuncio);
};

const deletePostById = async (req, res) => {
  const { postId } = req.params;

  await Anuncio.destroy({
    where: {
      id: postId,
    },
  });

  res.json("Correct delete");
};

module.exports = { getPosts, getPostById, createPost, deletePostById };
