import {
  canchasRouter,
  deportesRouter,
  deportivosRouter,
  equiposRouter,
  estadosRouter,
  eventosRouter,
  formatosRouter,
  loginRouter,
  partidosRouter,
  rolRouter,
  tipoEventoRouter,
  usersRouter,
} from "../routes/index.js";

const ROUTE_PATHS = {
  usuarios: "/api/usuarios",
  login: "/api/login",
  estados: "/api/estados",
  deportes: "/api/deportes",
  deportivos: "/api/deportivos",
  eventos: "/api/eventos",
  canchas: "/api/canchas",
  formatos: "/api/formatos",
  tiposDeEvento: "/api/tiposDeEvento",
  roles: "/api/roles",
  equipos: "/api/equipos",
  partidos: "/api/partidos",
};

const ROUTES_WITH_CONTROLLERS = [
  {
    path: ROUTE_PATHS.usuarios,
    router: usersRouter,
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

export { ROUTE_PATHS, ROUTES_WITH_CONTROLLERS };
