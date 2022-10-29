import { useAuthProvider } from "@/context/AuthContext";
import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function RedirectLoggedUser() {
  const { nextPath } = useAuthProvider();
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(nextPath);
    }
  }, [user, navigate]);

  if (isLoading) return <div>Cargando usuario...</div>;
  if (user) return <div>Ya has iniciado sesión</div>;

  return <Outlet />;
}
