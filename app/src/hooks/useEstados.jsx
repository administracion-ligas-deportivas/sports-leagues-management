import { fetchEstados } from "@/services/estados";
import { useEffect, useState } from "react";

export function useEstados() {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    fetchEstados().then((data) => {
      const { estados } = data;

      setEstados(estados);
    });
  }, []);

  return {
    estados,
  };
}
