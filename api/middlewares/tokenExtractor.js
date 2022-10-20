// https://fullstackopen.com/es/part4/autenticacion_de_token#limitacion-de-la-creacion-de-nuevas-notas-a-los-usuarios-registrados
const tokenExtractor = (req, res, next) => {
  // Equivalente a req.header("Authorization"), pero con Express.
  // const accessToken = req.header("accessToken");
  const authorization = req.get("authorization");
  let token = "";

  // El "Bearer" nos lo pueden pasar en cualquier case: "BEARER", "Bearer",
  // "bearer", ...
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    // 7 caracteres ocupa "bearer ".
    /* token = authorization.substring(7); */
    token = authorization.split(" ")[1];
  }

  req.token = token;

  next();
};

module.exports = {
  tokenExtractor,
};
