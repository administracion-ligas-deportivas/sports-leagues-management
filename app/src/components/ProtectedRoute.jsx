import { useAuthProvider } from "@/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { user } = useAuthProvider();
  const location = useLocation();

  if (!user || !user?.isAuthenticated) {
    return <Navigate to="/login" state={{ location }} />;
  }

  return children;
}
