import { useAuthProvider } from "@/context/AuthContext";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { user } = useAuthProvider();
  const location = useLocation();

  console.log(
    "🚀 ~ file: ProtectedRoute.jsx ~ line 9 ~ ProtectedRoute ~ user",
    user
  );

  if (!user?.isAuthenticated) {
    return <Navigate to="/login" state={{ location }} />;
  }

  return children;
}
