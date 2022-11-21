import { fetchEquipos } from "@/services/equipos";
import { useEffect, useState } from "react";

export function useEquipos() {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    fetchEquipos().then((data) => {
      const { equipos } = data;

      setEquipos(equipos);
    });
  }, []);
  

  return {
    equipos,
  };
}