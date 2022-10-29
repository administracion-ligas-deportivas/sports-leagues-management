import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

/*-----------PAGINAS/RUTAS-----------*/
import Home from "./pages/Home";
import HomeAdmin from "./pages/HomeAdmin";
import CreateAdvise from "./pages/CreateAdvise";
import Advise from "./pages/Advise";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GestionEventoDep from "./pages/GestionEventoDep";
import NuevoArbitro from "./pages/NuevoArbitro";
import CrearEventoDeportivo from "./pages/CreateSportEvent";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import EnterSportsEvent from "./pages/enter-sports-event";
import EstadisticasPersonales from "./pages/estadisticas-personales";
import AsignarRoles from "./pages/AsignarRoles";
import Equipos from "./pages/EquiposEnSistema";
import TraspasoEquipo from "./pages/TraspasoEquipo";
import RegistroDeportivo from "./pages/RegistroDeportivo";
import NuevaChancha from "./pages/agregarCancha";
import EventosDeportivos from "./pages/EventosDeportivos";
import MainLayout from "./Layouts/MainLayout";
import RegistroEstadistico from "./pages/Registrar-Estadistico";
import EquiposEnSistema from "./pages/EquiposEnSistema";
import GestionEquipo from "./pages/GestionEquipo";
import GestionEquipoJugador from "./pages/GestionEquipoJugador";
import RegistroPagoFísico from "./pages/RegistroPagoFísico";
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
  const [autState, setAuthState] = useState({
    nombre: "",
    id: 0,
    correo: "",
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/verify", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error)
          setAuthState({ nombre: "", id: 0, correo: "", status: false });
        else
          setAuthState({
            nombre: response.data.nombre,
            id: response.data.id,
            correo: response.userEmail,
            status: true,
          });
      });
  }, []);

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
    <AuthContext.Provider value={{ autState, setAuthState }}>
      <Router>
        <MainLayout>
          <Routes>
            {autState.status ? (
              <>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Home" element={<HomeAdmin />} />
                <Route path="/CreateAdvise" element={<CreateAdvise />} />
                <Route path="/Advise/:id" element={<Advise />} />
                <Route path="/Profile/:id" element={<Profile />} />
                <Route path="/GestionEventoDep" element={<GestionEventoDep />} />
                <Route path="/NuevoArbitro" element={<NuevoArbitro />} />
                <Route
                  path="/CrearEventoDeportivo"
                  element={<CrearEventoDeportivo />}
                />
                <Route
                  path="/EnterSportsEvent"
                  element={<EnterSportsEvent />}
                />
                <Route
                  path="/EstadisticasPersonales"
                  element={<EstadisticasPersonales />}
                />
                <Route path="/AsignarRoles" element={<AsignarRoles />} />
                <Route path="/Equipos" element={<Equipos />} />
                <Route path="/NuevaCancha" element={<NuevaChancha />} />
                <Route path="/EventosDeportivos" element={<EventosDeportivos />}/>
                <Route path="/TraspasoEquipo" element={<TraspasoEquipo />}/>
                <Route path="/RegistroDeportivo" element={<RegistroDeportivo />}/>
                <Route path="/RegistroEstadistico" element={<RegistroEstadistico />}/>
                <Route path="/EquiposEnSistema" element={<EquiposEnSistema />}/>
                <Route path="/GestionEquipo" element={<GestionEquipo />}/>
                <Route path="/GestionEquipoJugador" element={<GestionEquipoJugador />}/>
                <Route path='/RegistroPagoFisico' element={<RegistroPagoFísico />}/>
              </>
            ) : (
              <>
                <Route path="/" element={<Login />} />
                <Route path="/Register" element={<Register />} />
              </>
            )}
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </MainLayout>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
