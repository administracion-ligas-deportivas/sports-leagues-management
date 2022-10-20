import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const ACCESS_TOKEN_STRING = "ald_access_token";
const API_PORT = 3001;
const BASE_AUTH_URL = `http://localhost:${API_PORT}/api`;
const LOGIN_URL = `${BASE_AUTH_URL}/login`;
const VERIFY_URL = `${BASE_AUTH_URL}/users/verify`;

const throwRequestError = (error) => {
  throw new Error(`HTTP error: ${error}`);
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
    axios
      .post(LOGIN_URL, { correo, password })
      .then((res) => {
        const { token, correo, nombre, apellido, id } = res.data;

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
        throwRequestError(error);
      });
  };

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_STRING);
    setUser(null);
  };

  useEffect(() => {
    // https://github.com/midudev/preguntas-entrevista-react#c%C3%B3mo-puedes-cancelar-una-petici%C3%B3n-a-una-api-en-useeffect-correctamente
    const controller = new AbortController();
    const { signal } = controller;

    const token = localStorage.getItem(ACCESS_TOKEN_STRING);

    if (!token) {
      return;
    }

    const accessToken = `Bearer ${token}`;

    fetch(VERIFY_URL, { signal, headers: { Authorization: accessToken } })
      .then((res) => res.json())
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
        throwRequestError(error);
        setUser(null);
      });

    return () => controller.abort();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
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
