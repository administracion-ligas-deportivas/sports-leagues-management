import { useAuthProvider } from "@/context/AuthContext";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// No utilizamos Outlet porque no renderizamos la pantalla de la ruta, sino el
// MainLayout en este caso.
export function ProtectedRoute({ children }) {
  const { user } = useAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.isLoading && !user?.isAuthenticated) {
      navigate("/login", { state: { location } });
      return;
    }
  }, [user, navigate, location]);

  if (user?.isLoading) {
    return <div>Cargando usuario...</div>;
  }

  return user?.isAuthenticated && children;
}
