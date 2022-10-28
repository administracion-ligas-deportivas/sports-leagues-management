import { useAuthProvider } from "@/context/AuthContext";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function RedirectLoggedUser() {
  const { user, nextPath } = useAuthProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.isAuthenticated) {
      navigate(nextPath);
    }
  }, [user, navigate]);

  if (user?.isAuthenticated) return <div>Ya has iniciado sesión</div>;

  return <Outlet />;
}
