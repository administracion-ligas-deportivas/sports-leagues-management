import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    nombre: "",
    id: 0,
    correo: "",
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/verify", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error)
          setAuthState({ nombre: "", id: 0, correo: "", status: false });
        else
          setAuthState({
            nombre: response.data.nombre,
            id: response.data.id,
            correo: response.userEmail,
            status: true,
          });
      });
  }, []);

  return (
    <AuthContext.Provider value={{ authState }}>
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
