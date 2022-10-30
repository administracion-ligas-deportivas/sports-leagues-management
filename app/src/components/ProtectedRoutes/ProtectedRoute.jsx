import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// No utilizamos Outlet porque no renderizamos la pantalla de la ruta, sino el
// MainLayout en este caso.
export function ProtectedRoute({ children }) {
  const { user, isLoading, isError } = useUser();
  console.log(
    "🚀 ~ file: ProtectedRoute.jsx ~ line 9 ~ ProtectedRoute ~ user",
    user
  );
  console.log(
    "🚀 ~ file: ProtectedRoute.jsx ~ line 9 ~ ProtectedRoute ~ isError",
    isError
  );
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { location } });
      return;
    }
  }, [user, isError, location, navigate]);

  if (isLoading) {
    return <div>Cargando usuario...</div>;
  }

  return user && children;
}
