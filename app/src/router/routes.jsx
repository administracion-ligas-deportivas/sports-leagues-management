import { ProtectedRoute } from "@/components/ProtectedRoute";
import {
  Register,
  Equipos,
  NuevaChancha,
  Advise,
  AsignarRoles,
  CreateAdvise,
  CrearEventoDeportivo,
  EnterSportsEvent,
  EstadisticasPersonales,
  GestionTorneo,
  Home,
  NuevoArbitro,
  Profile,
  EventosDeportivos,
  Login,
  PageNotFound,
} from "@/pages";

// https://reactrouter.com/en/main/route/route
export const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/Advise/:id",
    element: <Advise />,
  },
  {
    path: "/CreateAdvise",
    element: <CreateAdvise />,
  },
  {
    path: "/Profile/:id",
    element: <Profile />,
  },
  {
    path: "/gestion-torneo",
    element: <GestionTorneo />,
  },
  {
    path: "/NuevoArbitro",
    element: <NuevoArbitro />,
  },
  {
    path: "/CrearEventoDeportivo",
    element: <CrearEventoDeportivo />,
  },
  {
    path: "/EnterSportsEvent",
    element: <EnterSportsEvent />,
  },
  {
    path: "/EstadisticasPersonales",
    element: <EstadisticasPersonales />,
  },
  {
    path: "/AsignarRoles",
    element: <AsignarRoles />,
  },
  {
    path: "/Equipos",
    element: <Equipos />,
  },
  {
    path: "/NuevaCancha",
    element: <NuevaChancha />,
  },
  {
    path: "/EventosDeportivos",
    element: <EventosDeportivos />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
