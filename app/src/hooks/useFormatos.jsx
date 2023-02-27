import { fetchFormatos } from "@/services/formatos";
import { useEffect, useState } from "react";

export function useFormatos() {
  const [formatos, setFormatos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFormatos().then(( {formatos} ) => {
      if (!formatos) {
        setError("No se encontraron formatos");
        return;
      }

      setFormatos(formatos);
    })
    .catch((error) => {
      console.log({error});
      setError(error);
    });
  }, []);

  useEffect(() => {
    console.log({formatos, error});
  }, [formatos, error])

  return {
    formatos,
    error
  };
}