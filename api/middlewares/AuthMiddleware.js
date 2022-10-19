const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  // Equivalente a req.header("Authorization"), pero con Express.
  // const accessToken = req.header("accessToken");
  const authorization = req.get("authorization");
  let token = null;

  // El "Bearer" nos lo pueden pasar en cualquier case: "BEARER", "Bearer",
  // "bearer", ...
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    // 7 caracteres ocupa "bearer ".
    /* token = authorization.substring(7); */
    token = authorization.split(" ")[1];
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);

    if (!token || !decodedToken.id) {
      return res
        .status(401)
        .json({ error: "El token no se encuentra o no es válido" });
    }

    if (decodedToken) return next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = { validateToken };
