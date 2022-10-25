import "./App.css";
import { useRoutes } from "react-router-dom";
import { useAuthProvider } from "./context/AuthContext";
import { routes } from "./router/routes";

function App() {
  const { user, isFetchingUser } = useAuthProvider();
  const currentRoute = useRoutes(routes);

  if (
    !user?.isAuthenticated &&
    (isFetchingUser || isFetchingUser === undefined)
  ) {
    return <div>Cargando...</div>;
  }

  return currentRoute;
}

export default App;
