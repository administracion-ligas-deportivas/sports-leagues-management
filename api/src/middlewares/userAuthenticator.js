import jwt from "jsonwebtoken";

const userAuthenticator = (req, res, next) => {
  const { token } = req;

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  if (!token || !decodedToken.id) {
    return res
      .status(401)
      .json({ error: "El token no se encuentra o no es válido" });
  }

  const { iat, exp, ...userProps } = decodedToken;

  // Con Express podemos mutar el objeto request.
  req.user = { ...userProps };

  // Con next() continuamos la ejecución del middleware.
  next();
};

export { userAuthenticator };
