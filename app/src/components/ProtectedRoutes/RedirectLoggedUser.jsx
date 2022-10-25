import { useAuthProvider } from "@/context/AuthContext";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function RedirectLoggedUser() {
  const { user } = useAuthProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return <Outlet />;
}
