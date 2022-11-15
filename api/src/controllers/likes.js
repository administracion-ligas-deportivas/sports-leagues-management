const { Likes } = require("../models");

const likePost = async (req, res) => {
  const { PostID } = req.body;
  const { id: userId } = req.user;

  const found = await Likes.findOne({
    //Verifica si el usuario actual ya le dio like al post actual
    where: { AnuncioId: PostID, UsuarioId: userId },
  });

  if (!found) {
    await Likes.create({ AnuncioId: PostID, UsuarioId: userId });
    res.json({ liked: true });
  } else {
    await Likes.destroy({
      where: {
        AnuncioId: PostID,
        UsuarioId: userId,
      },
    });
    res.json({ liked: false });
  }
};

module.exports = { likePost };
