import { authService } from "@/services/auth";
import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const ACCESS_TOKEN_STRING = "ald_access_token";

const AuthContext = createContext();

const logRequestError = (error) => {
  console.log(`🔻 ${error}`);
};

export function AuthProvider({ children }) {
  // const navigate = useNavigate();
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    id: 0,
    isAuthenticated: false,
  });

  const login = ({ correo, password } = {}) => {
    authService
      .login({ correo, password })
      .then((data) => {
        const { token, correo, nombre, apellido, id } = data;

        localStorage.setItem(ACCESS_TOKEN_STRING, token);
        setUser({
          correo,
          nombre,
          id,
          apellido,
          isAuthenticated: true,
        });

        // navigate("/");
      })
      .catch((error) => {
        logRequestError(error);
      });
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const verifyLoggedUser = (signal) => {
    authService
      .authenticateLoggedUser(signal)
      .then((data) => {
        console.log(
          "🚀 ~ file: AuthContext.jsx ~ line 85 ~ .then ~ data",
          data
        );
        const { user } = data;
        const { nombre, apellido, correo, id } = user;
        setUser({
          nombre,
          apellido,
          correo,
          id,
          isAuthenticated: true,
        });
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log(error.message);
        }
        logRequestError(error);
        setUser(null);
      });
  };

  useEffect(() => {
    // https://github.com/midudev/preguntas-entrevista-react#c%C3%B3mo-puedes-cancelar-una-petici%C3%B3n-a-una-api-en-useeffect-correctamente
    const controller = new AbortController();
    const { signal } = controller;

    verifyLoggedUser(signal);

    return () => controller.abort();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        verifyLoggedUser,
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
