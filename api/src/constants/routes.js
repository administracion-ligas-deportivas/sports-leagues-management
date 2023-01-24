const {
  canchasRouter,
  deportesRouter,
  deportivosRouter,
  endpointsRouter,
  equiposRouter,
  estadosRouter,
  eventosRouter,
  formatosRouter,
  loginRouter,
  meRouter,
  partidosRouter,
  rolRouter,
  tipoEventoRouter,
  usersRouter,
} = require("#src/routes/index.js");

const ROUTE_PATHS = {
  endpoints: "/api",
  canchas: "/api/canchas",
  deportes: "/api/deportes",
  deportivos: "/api/deportivos",
  equipos: "/api/equipos",
  estados: "/api/estados",
  eventos: "/api/eventos",
  formatos: "/api/formatos",
  login: "/api/login",
  me: "/api/me",
  partidos: "/api/partidos",
  roles: "/api/roles",
  tiposDeEvento: "/api/tiposDeEvento",
  usuarios: "/api/usuarios",
};

const ROUTES_WITH_CONTROLLERS = [
  {
    path: ROUTE_PATHS.endpoints,
    router: endpointsRouter,
  },
  {
    path: ROUTE_PATHS.usuarios,
    router: usersRouter,
  },
  {
    path: ROUTE_PATHS.me,
    router: meRouter,
  },
  {
    path: ROUTE_PATHS.login,
    router: loginRouter,
  },
  {
    path: ROUTE_PATHS.estados,
    router: estadosRouter,
  },
  {
    path: ROUTE_PATHS.deportes,
    router: deportesRouter,
  },
  {
    path: ROUTE_PATHS.deportivos,
    router: deportivosRouter,
  },
  {
    path: ROUTE_PATHS.eventos,
    router: eventosRouter,
  },
  {
    path: ROUTE_PATHS.canchas,
    router: canchasRouter,
  },
  {
    path: ROUTE_PATHS.formatos,
    router: formatosRouter,
  },
  {
    path: ROUTE_PATHS.tiposDeEvento,
    router: tipoEventoRouter,
  },
  {
    path: ROUTE_PATHS.roles,
    router: rolRouter,
  },
  {
    path: ROUTE_PATHS.equipos,
    router: equiposRouter,
  },
  {
    path: ROUTE_PATHS.partidos,
    router: partidosRouter,
  },
];

module.exports = { ROUTE_PATHS, ROUTES_WITH_CONTROLLERS };
