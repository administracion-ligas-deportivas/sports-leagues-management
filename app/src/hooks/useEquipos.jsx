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

  const deleteEquipo = (id) => {
    setEquipos(equipos.filter((equipo) => equipo.id !== id));
  };

  return {
    equipos,
    deleteEquipo,
  };
}