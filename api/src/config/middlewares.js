const {
  errorHandler,
  tokenExtractor,
  unknownEndpoint,
} = require("#src/middlewares/index.js");
const express = require("express");
const cors = require("cors");

const initMiddlewaresBeforeRoutes = (app) => {
  app.use(cors());
  app.use(express.json());

  // https://fullstackopen.com/es/part4/autenticacion_de_token#limitacion-de-la-creacion-de-nuevas-notas-a-los-usuarios-registrados
  app.use(tokenExtractor);
};

const initMiddlewaresAfterRoutes = (app) => {
  /* 
  https://fullstackopen.com/es/part3/node_js_y_express#middleware

  Las funciones de middleware deben utilizarse antes de las rutas si queremos
  que se ejecuten antes de llamar a los controladores de eventos de ruta.
  También hay situaciones en las que queremos definir funciones de middleware
  después de las rutas. En la práctica, esto significa que estamos definiendo
  funciones de middleware que solo se llaman si ninguna ruta maneja la solicitud
  HTTP.

  Agreguemos el siguiente middleware después de nuestras rutas, que se usa para
  capturar solicitudes realizadas a rutas inexistentes. Para estas solicitudes,
  el middleware devolverá un mensaje de error en formato JSON.
  */
  app.use(unknownEndpoint);
  app.use(errorHandler);
};

module.exports = { initMiddlewaresBeforeRoutes, initMiddlewaresAfterRoutes };
