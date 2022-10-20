import "./App.css";
import { useRoutes } from "react-router-dom";
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
  

  return <MainLayout>{route}</MainLayout>;
}

export default App;
