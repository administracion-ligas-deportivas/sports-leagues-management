import { fetchFormatos } from "@/services/Formatos";
import { useEffect, useState } from "react";

export function useFormatos() {
  const [formatos, setFormatos] = useState([]);

  useEffect(() => {
    fetchFormatos().then((formatos) => {
      setFormatos(formatos);
    });
  }, []);

  return {
    formatos,
  };
}
