import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./router/routes";

import MainLayout from "./Layouts/MainLayout";
import { useAuthProvider } from "./context/AuthContext";

function App() {
  const { isFetchingUser } = useAuthProvider();

  const route = useRoutes(routes);

  if (isFetchingUser || isFetchingUser === undefined) {
    return <div>Cargando...</div>;
  }

  return <MainLayout>{route}</MainLayout>;
}

export default App;
