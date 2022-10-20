import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./router/routes";

import MainLayout from "./Layouts/MainLayout";
import { useAuthProvider } from "./context/AuthContext";
import { useEffect } from "react";
import { authService } from "./services/auth";

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
  const { verifyLoggedUser } = useAuthProvider();
  const route = useRoutes(routes);
  //const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    verifyLoggedUser(signal);

    return () => {
      controller.abort();
    };
  });

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

  return <MainLayout>{route}</MainLayout>;
}

export default App;
