const { ENDPOINTS, ROLES } = require("#src/constants/index.js");
// const { userAuthenticator, hasRoles } = require("#src/middlewares/index.js");
const {
  countNumberOfParentEndpoints,
} = require("#src/utils/endpoints/index.js");

const endpointsRouter = require("express").Router();

const {
  usuarios,
  eventos,
  canchas,
  deportes,
  deportivos,
  equipos,
  estadisticas,
  formatos,
} = ENDPOINTS;

const ALL_ENDPOINTS = [
  usuarios,
  eventos,
  canchas,
  deportes,
  deportivos,
  equipos,
  estadisticas,
  formatos,
];

const DEFAULT_RESPONSE = {
  message: "Bienvenido a la API de Administración de Ligas Deportivas",
  lastUpdate: "Lunes, 23 de enero de 2023",
  parentEndpoints: {
    total: countNumberOfParentEndpoints(),
    endpoints: Object.keys(ENDPOINTS),
  },
  endpoints: ALL_ENDPOINTS,
};

const getEndpoints = (req, res) => {
  const { endpoints } = req.query;

  const endpointsArray = endpoints
    ?.split(",")
    ?.map((endpoint) => endpoint.trim());

  if (!endpoints || endpointsArray?.length === 0) {
    res.json(DEFAULT_RESPONSE);
    return;
  }

  const foundEndpoints = Object.values(ENDPOINTS).filter(({ endpoint }) => {
    return endpointsArray.includes(endpoint.split("/").at(1));
  });

  console.log({ foundEndpoints, endpoints, endpointsArray });

  return res.json({
    ...DEFAULT_RESPONSE,
    foundEndpoints: {
      total: foundEndpoints.length,
      endpoints: endpointsArray,
    },
    endpoints: foundEndpoints,
  });
};

// En desarrollo no solicitar autenticación para facilitar el acceso a los
// endpoints desde el navegador.
/* endpointsRouter
  .route("/")
  .get([userAuthenticator, hasRoles(ROLES.ADMIN)], getEndpoints); */
endpointsRouter.route("/").get(getEndpoints);

module.exports = { endpointsRouter };
