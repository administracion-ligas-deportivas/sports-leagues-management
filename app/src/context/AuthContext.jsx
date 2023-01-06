import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "@/hooks/useUser";
import { authService } from "@/services/auth";
import { ACCESS_TOKEN_STRING } from "@/constants/auth";
// import { usenavigate } from "react-router-dom";

const logRequestError = (error) => {
  console.log(`🔻 ${error}`);
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { mutateUser } = useUser();

  const { state } = useLocation();
  const navigate = useNavigate();
  const [nextPath, setNextPath] = useState(null);

  useEffect(() => {
    setNextPath(() => state?.location?.pathname ?? "/");
    // console.log({ nextPath });
  }, [state]);

  const login = async ({ correo, password } = {}) => {
    const user = await authService.login({ correo, password });

    if (user?.error) {
      throw new Error(user.error);
    }

    localStorage.setItem(ACCESS_TOKEN_STRING, JSON.stringify(user));

    mutateUser(user);
    navigate("/");
  };

  const logout = async () => {
    authService.logout();
    await mutateUser(null);
  };

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
