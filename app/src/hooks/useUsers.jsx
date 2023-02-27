import { useEffect, useState } from "react";
import { fetchUsuarios } from "@/services/usuariosSistema";

export function useUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsuarios().then(( usuarios ) => {
      if (!usuarios) {
        setError("No se encontraron usuarios");
        return;
      }

      setUsuarios(usuarios);
    })
      .catch((error) => {
        console.log({ error });
        setError(error);
      });
  }, []);

  useEffect(() => {
    // console.log({usuarios, error});
  }, [usuarios, error]);

  return {
    usuarios,
    error
  };
}
