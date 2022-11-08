import { ProtectedRoute } from "@/components/ProtectedRoutes/ProtectedRoute";
import { RedirectLoggedUser } from "@/components/ProtectedRoutes/RedirectLoggedUser";
import MainLayout from "@/Layouts/MainLayout";

import {
  Loading,
  Register,
  NuevaChancha,
  Advise,
  AsignarRoles,
  CreateAdvise,
  CrearEventoDeportivo,
  EnterSportsEvent,
  EstadisticasPersonales,
  Home,
  NuevoArbitro,
  Profile,
  EventosDeportivos,
  Login,
  PageNotFound,
  HomeAdmin,
  GestionEventoDep,
  GestionEquipoJugador,
  RegistroDeportivo,
  TraspasoEquipo,
  RegistroEstadistico,
  EquiposEnSistema,
  GestionEquipo,
  RegistroPagoFisico,
} from "@/pages";

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
      { path: "/home-admin", element: <HomeAdmin /> },
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
        path: "/gestion-evento-deportivo",
        element: <GestionEventoDep />,
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
        path: "/nueva-cancha",
        element: <NuevaChancha />,
      },
      {
        path: "/eventos-deportivos",
        element: <EventosDeportivos />,
      },
      {
        path: "/home-admin",
        element: <HomeAdmin />,
      },
      {
        path: "/gestion-equipo-jugador",
        element: <GestionEquipoJugador />,
      },
      {
        path: "/registro-deportivo",
        element: <RegistroDeportivo />,
      },
      {
        path: "/traspaso-equipo",
        element: <TraspasoEquipo />,
      },
      {
        path: "/registro-estadistico",
        element: <RegistroEstadistico />,
      },
      {
        path: "/equipos-en-sistema",
        element: <EquiposEnSistema />,
      },
      {
        path: "/gestion-equipo",
        element: <GestionEquipo />,
      },
      {
        path: "/registro-pago-fisico",
        element: <RegistroPagoFisico />,
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
  {
    path: "/loading",
    element: <Loading />,
  },
];
