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
import EquiposEnSistema from "@/pages/EquiposEnSistema";
import HomeAdmin from "@/pages/HomeAdmin";

// https://reactrouter.com/en/main/route/route
export const routes = [
  {
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <HomeAdmin /> },
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
        path: "/equipos-en-sistema",
        element: <EquiposEnSistema />,
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
