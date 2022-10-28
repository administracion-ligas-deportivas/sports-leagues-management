import { authService } from "@/services/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { usenavigate } from "react-router-dom";

const ACCESS_TOKEN_STRING = "aldLoggedUser";

const AuthContext = createContext();

const logRequestError = (error) => {
  console.log(`🔻 ${error}`);
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    id: null,
    token: "",
    isAuthenticated: false,
    isLoading: true,
  });
  const { state } = useLocation();
  const navigate = useNavigate();
  const [nextPath, setNextPath] = useState(null);

  useEffect(() => {
    setNextPath(() => state?.location?.pathname ?? "/");
    console.log({ nextPath });
  }, [state]);

  const login = async ({ correo, password } = {}) => {
    const user = await authService.login({ correo, password });
    // const { token, correo: userEmail, nombre, apellido, id } = user;

    localStorage.setItem(ACCESS_TOKEN_STRING, JSON.stringify(user));
    setUser({ ...user, isAuthenticated: true });
    navigate(nextPath);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    // navigate("/login", { state: { location } });
  };

  useEffect(() => {
    setUser((user) => ({ ...user, isLoading: true }));
    // https://github.com/midudev/preguntas-entrevista-react#c%C3%B3mo-puedes-cancelar-una-petici%C3%B3n-a-una-api-en-useeffect-correctamente
    // const controller = new AbortController();
    // const { signal } = controller;

    authService
      .authenticateLoggedUser()
      .then((data) => {
        console.log(
          "🚀 ~ file: AuthContext.jsx ~ line 85 ~ .then ~ data",
          data
        );

        const { user } = data;

        setUser({ ...user, isAuthenticated: true, isLoading: false });
        navigate(nextPath);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log(error.message);
        }
        logRequestError(error);
        setUser(null);
      })
      .finally(() => {
        setUser((user) => ({ ...user, isLoading: false }));
      });

    // return () => controller.abort();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        nextPath,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthProvider() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}
