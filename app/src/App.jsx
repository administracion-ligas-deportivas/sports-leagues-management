import { SWRConfig } from "swr";
import { useRoutes } from "react-router-dom";
import { routes } from "./router/routes";
import "./App.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const currentRoute = useRoutes(routes);
  // useNavigation se debe de utilizar con un "data router".
  // const navigation = useNavigation();

  // https://reactrouter.com/en/main/start/overview#pending-navigation-ui
  // if (navigation.state === "loading") return <div>Cargando...</div>;

  return <SWRConfig value={{ fetcher }}>{currentRoute}</SWRConfig>;
}

export default App;
