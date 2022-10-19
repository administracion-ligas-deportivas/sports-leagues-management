const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "Usuario no logueado" });

  try {
    const validToken = verify(accessToken, "importantSecret");
    req.user = validToken;
    if (validToken) return next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = { validateToken };
