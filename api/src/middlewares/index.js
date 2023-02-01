const errorHandler = require("./errorHandler");
const userAuthenticator = require("./userAuthenticator");
const unknownEndpoint = require("./unknownEndpoint");
const tokenExtractor = require("./tokenExtractor");
const validateRules = require("./validateRules");
const unavailableRoute = require("./unavailableRoute");
const roles = require("./roles");

module.exports = {
  ...errorHandler,
  ...userAuthenticator,
  ...unknownEndpoint,
  ...tokenExtractor,
  ...validateRules,
  ...unavailableRoute,
  ...roles,
};
