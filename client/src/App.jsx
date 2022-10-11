import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import CreateAdvise from "./pages/CreateAdvise";
import Advise from "./pages/Advise";
import Login from "./pages/Login";
import GestionTorneo from "./pages/gestion-torneo";
import NuevoArbitro from "./pages/NuevoArbitro";
import CrearEventoDeportivo from "./pages/CreateSportEvent";
import { useState, useEffect } from "react";
import axios from "axios";
import PageNotFound from "./pages/PageNotFound";
import EnterSportsEvent from "./pages/enter-sports-event";
import EstadisticasPersonales from "./pages/estadisticas-personales";
import AsignarRoles from "./pages/AsignarRoles";
import TraspasoEquipo from "./pages/TraspasoEquipo";
import RegistroDeportivo from "./pages/RegistroDeportivo";
import EventosDeportivos from "./pages/EventosDeportivos";
import MainLayout from "./Layouts/MainLayout";
import RegistroEstadistico from "./pages/Registrar-Estadistico";
import { AuthProvider } from "./context/AuthContext";
import { router } from "./router";

/**
 *
 * En react se puede hacer un "if" con
 * { condición && (
 *    resultado
 * )}
 *
 * o un if else
 * { condición ? (
 *    resultado if
 * ):(
 *    resultado else
 * )}
 *
 * Las etiquetas <Link> deben tener el atributo to="/ruta" Para funcionar!!!!!!!! (no dará errores en la compilación pero si al momento de ver la página)
 *
 */

function App() {
  //const navigate = useNavigate();

  /*
    MOVER A PANTALLA DE PERFIL
    const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ nombre: "", id: 0, correo: '', status: false });
    //navigate('/');
    
    //Se reemplazó por el Nav
      <Label>{autState.nombre}</Label>
      <Button onClick={logout}>Cerrar sesión</Button>
  */

  return (
    <AuthProvider>
      <RouterProvider router={router}>
        <MainLayout>
          <Route />
        </MainLayout>
      </RouterProvider>
    </AuthProvider>
  );
}

export default App;
