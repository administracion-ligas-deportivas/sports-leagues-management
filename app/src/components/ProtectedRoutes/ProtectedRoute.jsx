import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/loading";

// No utilizamos Outlet porque no renderizamos la pantalla de la ruta, sino el
// MainLayout en este caso.
export function ProtectedRoute({ children }) {
  const { user, isLoading, isError } = useUser();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { location } });
      return;
    }
  }, [user, isError, location, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  return user && children;
}
