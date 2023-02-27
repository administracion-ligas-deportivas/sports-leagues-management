import { useEffect, useState } from "react";
import { equiposService } from "@/services";

export function useEquipos() {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    equiposService.fetchEquipos().then(({ equipos }) => {
      setEquipos(equipos);
    });
  }, []);

  return {
    equipos,
  };
}
