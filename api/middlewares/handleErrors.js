const { res } = require("express");

// https://www.youtube.com/watch?v=btW1SefZf9M&t=473s
const ERROR_HANDLERS = {
  CastError: (res) => res.status(400).send({ error: "id used is malformed" }),

  ValidationError: (res, { message }) =>
    res.status(409).send({ error: message }),

  JsonWebTokenError: (res) => res.status(401).json({ error: "invalid token" }),

  defaultError: res.status(500).end(),
};

module.exports = (error, req, res, next) => {
  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError;

  handler(res, error);
};
