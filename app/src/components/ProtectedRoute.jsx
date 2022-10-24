import { useAuthProvider } from "@/context/AuthContext";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { user, isFetchingUser } = useAuthProvider();
  const location = useLocation();

  console.log(
    "🚀 ~ file: ProtectedRoute.jsx ~ line 10 ~ ProtectedRoute ~ isFetchingUser",
    isFetchingUser
  );

  if (isFetchingUser || isFetchingUser === undefined) {
    return <div>Cargando usuario...</div>;
  }

  console.log(
    "🚀 ~ file: ProtectedRoute.jsx ~ line 19 ~ ProtectedRoute ~ user",
    user
  );

  if (!user) {
    return <Navigate to="/login" state={{ location }} />;
  }

  return children;
}
