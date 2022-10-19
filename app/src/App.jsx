import "./App.css";
import { useRoutes } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { routes } from "./router/routes";
import MainLayout from "./Layouts/MainLayout";

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
  const route = useRoutes(routes);
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
      <MainLayout>{route}</MainLayout>
    </AuthProvider>
  );
}

export default App;
