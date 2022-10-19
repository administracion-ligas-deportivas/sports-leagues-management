import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const ACCESS_TOKEN_STRING = "accessToken";
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
    axios
      .post(LOGIN_URL, { correo, password })
      .then((res) => {
        console.log("🚀 ~ file: AuthContext.jsx ~ line 29 ~ .then ~ res", res);
        // if (res.data.error) {
        //   throwRequestError(res.data.error);
        // }

        const { token, correo, nombre, id } = res.data;
        localStorage.setItem(ACCESS_TOKEN_STRING, token);
        setUser({
          correo,
          nombre,
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
    localStorage.removeItem(ACCESS_TOKEN_STRING);
    setUser(null);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STRING);

    axios
      .get(VERIFY_URL, {
        headers: {
          accessToken,
        },
      })
      .then((res) => {
        console.log("🚀 ~ file: AuthContext.jsx ~ line 64 ~ .then ~ res", res);
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
