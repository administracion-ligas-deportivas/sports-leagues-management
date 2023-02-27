import { VERIFY_URL, authService } from "@/services/auth";
import { useEffect, useState } from "react";
import { ROLES } from "@/constants";
import useSWR from "swr";

// https://swr.vercel.app/docs/getting-started#make-it-reusable
export function useUser() {
  // https://swr.vercel.app/docs/conditional-fetching#conditional
  const { data, error, mutate } = useSWR(
    VERIFY_URL,
    authService.authenticateLoggedUser
  );

  console.log({ data });
  // const mutateUser = useCallback((user) => mutate(user), [mutate]);

  const [user, setUser] = useState(null);
  const [rol, setRol] = useState(null);
  const [isOrganizador, setIsOrganizador] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = data?.user;
    
    setUser(user);
  }, [data]);
  
  useEffect(() => {
    const rol = user?.rol?.nombre;

    setRol(rol);
  }, [user]);

  useEffect(() => {
    setIsOrganizador(rol === ROLES.ORGANIZADOR);
    setIsAdmin(rol === ROLES.ADMIN);
  }, [rol]);

  console.log({ rol,user, error });

  return {
    user: error ? null : data?.user,
    isLoading: !error && !data,
    rol,
    isOrganizador,
    isAdmin,
    isError: error,
    mutateUser: mutate,
  };
}
