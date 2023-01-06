import { useAuthProvider } from "@/context/AuthContext";
import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Loading from "../Loading/loading";

export function RedirectLoggedUser() {
  const { nextPath } = useAuthProvider();
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log({ user });
      navigate(nextPath);
    }
  }, [user, navigate]);

  if (isLoading) return <Loading />;
  if (user) return <Loading />;

  return <Outlet />;
}
