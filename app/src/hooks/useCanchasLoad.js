import { useEffect, useState } from "react";
import { fetchCanchas } from "@/services/canchas";

export function useCanchasLoad() {
  const [canchas, setCanchas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCanchas().then(( canchas ) => {
      if (!canchas) {
        setError("No se encontraron canchas");
        return;
      }

      setCanchas(canchas);
    })
      .catch((error) => {
        console.log({ error });
        setError(error);
      });
  }, []);

  useEffect(() => {
    console.log({ canchas, error });
  }, [canchas, error]);

  return {
    canchas,
    error
  };
}
