import { useUser } from "@/hooks/useUser";
import { authService } from "@/services/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { usenavigate } from "react-router-dom";

const ACCESS_TOKEN_STRING = "aldLoggedUser";

const logRequestError = (error) => {
  console.log(`🔻 ${error}`);
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { user, isError, mutateUser } = useUser();

  // const [user, setUser] = useState({
  //   nombre: "",
  //   apellido: "",
  //   correo: "",
  //   id: null,
  //   token: "",
  //   isAuthenticated: false,
  //   isLoading: true,
  // });

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

    mutateUser(user);
    navigate(nextPath);
  };

  const logout = async () => {
    authService.logout();
    await mutateUser(null);
  };

  //   useEffect(() => {
  //     if (user) {
  //       navigate(nextPath);
  //     }
  //     if (isError) {
  //       logRequestError(isError);
  //     }
  //
  //     // https://github.com/midudev/preguntas-entrevista-react#c%C3%B3mo-puedes-cancelar-una-petici%C3%B3n-a-una-api-en-useeffect-correctamente
  //     // const controller = new AbortController();
  //     // const { signal } = controller;
  //
  //     // return () => controller.abort();
  //   }, [user, isError, nextPath]);

  return (
    <AuthContext.Provider
      value={{
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
    throw new Error("useAuthProvider must be used within a AuthProvider");
  }

  return context;
}
