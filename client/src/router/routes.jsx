import Register from "@/pages/Register";
import Equipos from "@/pages/EquiposEnSistema";
import NuevaChancha from "@/pages/agregarCancha";
import Advise from "@/pages/Advise";
import AsignarRoles from "@/pages/AsignarRoles";
import CreateAdvise from "@/pages/CreateAdvise";
import CrearEventoDeportivo from "@/pages/CreateSportEvent";
import EnterSportsEvent from "@/pages/enter-sports-event";
import EstadisticasPersonales from "@/pages/estadisticas-personales";
import GestionTorneo from "@/pages/gestion-torneo";
import Home from "@/pages/Home";
import NuevoArbitro from "@/pages/NuevoArbitro";
import Profile from "@/pages/Profile";
import EventosDeportivos from "@/pages/EventosDeportivos";
import Login from "@/pages/Login";
import PageNotFound from "@/pages/PageNotFound";

// https://reactrouter.com/en/main/route/route
export const routes = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Advise />,
    path: "/Advise/:id",
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
