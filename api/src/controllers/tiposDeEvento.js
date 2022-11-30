const { tipoEventoDeportivo } = require("../db/models");

const createTipoEvento = async (req, res) => {
  const { nombre, descripcion } = req.body;

  try {
    const tipoEventoCreado = await tipoEventoDeportivo.create({
      nombre,
      descripcion,
    });

    res.status(201).json(tipoEventoCreado);
  } catch (error) {
    console.log({ error });

    return res
      .status(400)
      .json({ error: "No se ha podido registrar el tipo de evento" });
  }
};

module.exports = {
  createTipoEvento,
};
