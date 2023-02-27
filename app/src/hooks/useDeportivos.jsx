import { fetchDeportivos } from "@/services/deportivos";
import { useEffect, useState } from "react";

export function useDeportivos() {
  const [deportivos, setDeportivos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDeportivos().then(( deportivos ) => {
      if (!deportivos) {
        setError("No se encontraron deportivos");
        return;
      }

      setDeportivos(deportivos);
    })
    .catch((error) => {
      console.log({error});
      setError(error);
    });
  }, []);

  useEffect(() => {
    console.log({deportivos, error});
  }, [deportivos, error])

  return {
    deportivos,
    error
  };
}