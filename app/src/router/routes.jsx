import {
  // GestionEquipoJugador,
  // GestionTorneo,
  Advise,
  AgregarCancha,
  AsignarRoles,
  CrearEventoDeportivo,
  CrearFormato,
  CreateAdvise,
  EnterSportsEvent,
  EquiposEnSistema,
  EstadisticasPersonales,
  EventosDeportivos,
  Formatos,
  GestionEquipo,
  GestionEquipoJugador,
  GestionEventoDep,
  Home,
  HomeAdmin,
  Loading,
  Login,
  NuevoArbitro,
  PageNotFound,
  PanelAdmin,
  PartidosEnSistema,
  Profile,
  Register,
  RegistroDeportivo,
  RegistroEstadistico,
  RegistroPagoFisico,
  TraspasoEquipo,
} from "@/pages";

import MainLayout from "@/Layouts/MainLayout";
import { ProtectedRoute } from "@/components/ProtectedRoutes/ProtectedRoute";
import { RedirectLoggedUser } from "@/components/ProtectedRoutes/RedirectLoggedUser";

// https://reactrouter.com/en/main/route/route
export const routes = [
  {
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [

      { 
        path: "/", 
        element: <Home /> 
      },
      { 
        path: "/home", 
        element: <HomeAdmin /> 
      },

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
        path: "/gestion-evento-deportivo/:eventoId",
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
        element: <AgregarCancha />,
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
      {
        path: "/panel-admin",
        element: <PanelAdmin />,
      },
      {
        path: "/crear-formato",
        element: <CrearFormato />,
      },
      {
        path: "/visualizar-formatos",
        element: <Formatos />,
      },
      {
        path: "/partidos-en-sistema",
        element: <PartidosEnSistema />,
      }
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
