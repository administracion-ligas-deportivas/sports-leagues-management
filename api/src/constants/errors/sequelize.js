const SEQUELIZE_ERROR_NAMES = {
  SequelizeForeignKeyConstraintError: "SequelizeForeignKeyConstraintError",
};

const SEQUELIZE_ERROR_HANDLERS = {
  SequelizeDatabaseError: (res, { original }) => {
    // Puede ser sensible mostrar el texto porque podría contener información
    // sobre las tablas y columnas.
    const error = original.code;
    // const error = `[${original.code}]: ${original.text}`;
    res.status(400).json({ error });
  },
  // Add Sequelize validation error handler
  SequelizeValidationError: (res, { errors }) => {
    console.log("ValidationError");
    const errorMessages = errors.map(({ message }) => message);

    res.status(400).json({ errors: errorMessages });
  },

  SequelizeUniqueConstraintError: (res, { errors }) => {
    const errorMessages = errors.map(({ message }) => message);

    res.status(400).json({ errors: errorMessages });
  },

  // No funciona.
  SequelizeForeignKeyConstraintError: (res, error) => {
    const { fields } = error;

    const foreignKeysString = fields.map((string) => `'${string}'`).join(", ");

    const singularSentence = "la siguiente llave foránea";
    const pluralSentence = singularSentence
      .split(" ")
      .map((string) => string + "s")
      .join(" ");

    const sentence = fields.length > 1 ? pluralSentence : singularSentence;

    res.status(400).json({
      error: `Ha ocurrido un error con ${sentence}: ${foreignKeysString}`,
    });
  },

  SequelizeScopeError: (res, { message }) => {
    res.status(400).json({ error: message });
  },
  default: (res) =>
    res.status(400).json({ error: "No se ha podido crear el recurso" }),
};

module.exports = {
  SEQUELIZE_ERROR_NAMES,
  SEQUELIZE_ERROR_HANDLERS,
};
