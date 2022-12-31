const requiredEventoId = (req, res, next) => {
  const { eventoId } = req.params;

  if (!eventoId) {
    return res.status(400).json({
      error: "eventoId es requerido",
    });
  }

  const id = Number(eventoId);

  console.log({ eventoId, id });

  if (!Number.isInteger(id)) {
    return res.status(400).json({
      error: "eventoId debe ser un número",
    });
  }

  next();
};

module.exports = {
  requiredEventoId,
};
