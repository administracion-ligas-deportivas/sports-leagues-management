const { validationResult, param } = require("express-validator");

const checkParamsId = (idName) => {
  // https://express-validator.github.io/docs/custom-validators-sanitizers#example-converting-to-mongodbs-objectid
  return param(idName, `El ${idName} es requerido y debe ser numérico`)
    .notEmpty()
    .isNumeric();
};

const validateRules = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

module.exports = { validateRules, checkParamsId };
