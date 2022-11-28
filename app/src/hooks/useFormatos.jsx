import { fetchFormatos } from "@/services/Formatos";
import { useEffect, useState } from "react";

export function useFormatos() {
  const [formatos, setFormatos] = useState([]);

  useEffect(() => {
    fetchFormatos().then((data) => {
      const { formatos } = data;

      setFormatos(formatos);
    });
  }, []);
  

  return {
    formatos,
  };
}
