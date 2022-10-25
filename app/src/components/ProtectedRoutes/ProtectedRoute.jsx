import { useAuthProvider } from "@/context/AuthContext";
import { Navigate, useLocation, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const { user, isFetchingUser } = useAuthProvider();
  const location = useLocation();

  if (isFetchingUser || isFetchingUser === undefined) {
    return <div>Cargando usuario...</div>;
  }

  if (!user?.isAuthenticated) {
    return <Navigate to="/login" state={{ location }} />;
  }

  return <Outlet />;
}
