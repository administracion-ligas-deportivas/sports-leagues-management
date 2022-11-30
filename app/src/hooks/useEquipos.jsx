import { fetchEquipos } from "@/services/equipos";
import { useEffect, useState } from "react";

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
