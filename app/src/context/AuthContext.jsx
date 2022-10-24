import { authService } from "@/services/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const ACCESS_TOKEN_STRING = "aldLoggedUser";

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
    id: null,
    token: "",
    isAuthenticated: false,
  });

  const [isFetchingUser, setIsFetchingUser] = useState();

  const login = async ({ correo, password } = {}) => {
    const user = await authService.login({ correo, password });
    // const { token, correo: userEmail, nombre, apellido, id } = user;

    localStorage.setItem(ACCESS_TOKEN_STRING, JSON.stringify(user));
    setUser({
      ...user,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  //   useEffect(() => {
  //     const loggedUserJson = window.localStorage.getItem("aldLoggedUser");
  //
  //     if (loggedUserJson) {
  //       const user = JSON.parse(loggedUserJson);
  //       setUser(user);
  //       console.log("Se ha recuperado el usuario desde el localStorage", {
  //         user,
  //       });
  //     }
  //   }, []);

  useEffect(() => {
    // https://github.com/midudev/preguntas-entrevista-react#c%C3%B3mo-puedes-cancelar-una-petici%C3%B3n-a-una-api-en-useeffect-correctamente
    // const controller = new AbortController();
    // const { signal } = controller;

    setIsFetchingUser(true);

    authService
      .authenticateLoggedUser()
      .then((data) => {
        console.log(
          "🚀 ~ file: AuthContext.jsx ~ line 85 ~ .then ~ data",
          data
        );

        const { user } = data;

        setUser({
          ...user,
          isAuthenticated: true,
        });
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log(error.message);
        }
        logRequestError(error);
        setUser(null);
      })
      .finally(() => {
        // Si hago que el isFetchingUser sea falso en el finally, será falso
        // cuando se aborte el useEffect que efectúa el modo estricto de React.
        setIsFetchingUser(false);
      });

    // return () => controller.abort();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isFetchingUser,
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
