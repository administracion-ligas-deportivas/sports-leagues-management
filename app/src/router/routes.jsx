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
