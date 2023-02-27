import { useEffect, useState } from "react";
import { fetchEquipos } from "@/services/equipos";

export function useEquipos() {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    fetchEquipos().then(({ equipos }) => {
      console.log({ equipos });
      setEquipos(equipos);
    });
  }, []);

  return {
    equipos,
  };
}
