import { fetchEventosReales } from "@/services/eventos";
import { useEffect, useState } from "react";

export function useEventos() {
  const [eventos, setEventos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEventosReales().then(( {eventos} ) => {
      if (!eventos) {
        setError("No se encontraron eventos");
        return;
      }

      setEventos(eventos);
    })
    .catch((error) => {
      console.log({error});
      setError(error);
    });
  }, []);

  useEffect(() => {
    console.log({eventos, error});
  }, [eventos, error])

  return {
    eventos,
    error
  };
}
