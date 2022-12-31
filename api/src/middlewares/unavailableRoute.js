const unavailableRoute = (req, res) => {
  return res.status(405).json({
    error: `El método ${req.method} no está disponible para la ruta ${req.route.path}`,
  });
};

module.exports = { unavailableRoute };
