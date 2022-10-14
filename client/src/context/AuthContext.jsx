import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const ACCESS_TOKEN = "accessToken";
const API_PORT = 3001;
const BASE_AUTH_URL = `http://localhost:${API_PORT}/auth`;
const LOGIN_URL = `${BASE_AUTH_URL}/login`;
const VERIFY_URL = `${BASE_AUTH_URL}/verify`;

const throwRequestError = (error) => {
  throw new Error(`HTTP error: ${error}`);
};

export function AuthProvider({ children }) {
  // const navigate = useNavigate();
  const [user, setUser] = useState({
    nombre: "",
    correo: "",
    id: 0,
    isAuthenticated: false,
  });

  const login = ({ correo, password } = {}) => {
    const data = { correo, password };
    axios
      .post(LOGIN_URL, data)
      .then((res) => {
        // if (res.data.error) {
        //   throwRequestError(res.data.error);
        // }

        const { token, correo, nombre, id } = res.data;
        localStorage.setItem(ACCESS_TOKEN, token);
        setUser({
          correo: correo,
          nombre: nombre,
          id: id,
          isAuthenticated: true,
        });

        // navigate("/");
      })
      .catch((error) => {
        throwRequestError(error);
      });
  };

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setUser(null);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (!accessToken) return;

    axios
      .get(VERIFY_URL, {
        headers: {
          accessToken,
        },
      })
      .then((res) => {
        const { nombre, correo, id } = res.data;
        setUser({
          nombre,
          correo,
          id,
          isAuthenticated: true,
        });
      })
      .catch((error) => {
        throwRequestError(error);
        setUser(null);
      });
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
