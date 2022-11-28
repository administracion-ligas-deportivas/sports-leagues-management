const { formatoEventoDeportivo } = require("../db/models");

const getFormatoEvento = async (req, res) => {
  const formato = await formatoEventoDeportivo.findAll();
  return res.json(formato);
};

const getFormatoById = async (req, res) => {
  const { formatoId } = req.params;
  const formato = await formatoEventoDeportivo.findByPk(formatoId);

  return res.json(formato);
};

const createFormatoEvento = async (req, res) => {
  const { body: formatoEvento } = req;

  try {
    const tipoEventoCreado = await formatoEventoDeportivo.create(formatoEvento);

    res.status(201).json(tipoEventoCreado);
  } catch (error) {
    console.log({ error });

    return res
      .status(400)
      .json({ error: "No se ha podido crear el formato de evento" });
  }
};
module.exports = {
  getFormatoEvento,
  getFormatoById,
  createFormatoEvento,
};
