import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const ACCESS_TOKEN = ACCESS_TOKEN;

const throwRequestError = (error) => {
  throw new Error(`HTTP error: ${error}`);
};

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nombre: "",
    id: 0,
    correo: "",
    isAuth: false,
  });

  const login = ({ email, password } = {}) => {
    const data = { correo: email, contrasenia: password };
    axios
      .post("http://localhost:3001/auth/login", data)
      .then((res) => {
        // if (res.data.error) {
        //   throwRequestError(res.data.error);
        // }

        const { token, userEmail, nombre, id } = res.data;
        localStorage.setItem(ACCESS_TOKEN, token);
        setUser({
          correo: userEmail,
          nombre: nombre,
          id: id,
          isAuth: true,
        });
        navigate("/Home");
      })
      .catch((error) => {
        throwRequestError(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/verify", {
        headers: {
          accessToken: localStorage.getItem(ACCESS_TOKEN),
        },
      })
      .then((res) => {
        const { nombre, userEmail, id } = res.data;
        setUser({
          nombre,
          correo: userEmail,
          id,
          isAuth: true,
        });
      })
      .catch((error) => {
        throwRequestError(error);
        setUser({ nombre: "", id: 0, correo: "", isAuth: false });
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        user,
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
