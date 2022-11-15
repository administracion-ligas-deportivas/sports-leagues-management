const unknownEndpoint = (request, response) => {
  return response.status(404).send({ error: "unknown endpoint" });
};

module.exports = {
  unknownEndpoint,
};
