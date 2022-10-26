import { ProtectedRoute } from "@/components/ProtectedRoutes/ProtectedRoute";
import { RedirectLoggedUser } from "@/components/ProtectedRoutes/RedirectLoggedUser";
import MainLayout from "@/Layouts/MainLayout";

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
    element: (
      <MainLayout>
        <ProtectedRoute />
      </MainLayout>
    ),
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/advise/:id",
        element: <Advise />,
      },
      {
        path: "/create-advise",
        element: <CreateAdvise />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/gestion-torneo",
        element: <GestionTorneo />,
      },
      {
        path: "/nuevo-arbitro",
        element: <NuevoArbitro />,
      },
      {
        path: "/crear-evento-deportivo",
        element: <CrearEventoDeportivo />,
      },
      {
        path: "/enter-sports-event",
        element: <EnterSportsEvent />,
      },
      {
        path: "/estadisticas-personales",
        element: <EstadisticasPersonales />,
      },
      {
        path: "/asignar-roles",
        element: <AsignarRoles />,
      },
      {
        path: "/equipos",
        element: <Equipos />,
      },
      {
        path: "/nueva-cancha",
        element: <NuevaChancha />,
      },
      {
        path: "/eventos-deportivos",
        element: <EventosDeportivos />,
      },
    ],
  },
  {
    element: <RedirectLoggedUser />,
    loader: <div>Cargando...</div>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
];
