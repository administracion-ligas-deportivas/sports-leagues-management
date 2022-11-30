import { fetchEventosReales } from "@/services/eventos";
import { useEffect, useState } from "react";

export function useEventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetchEventosReales().then((eventos) => {
      console.log({ eventos });
      setEventos(eventos);
    });
  }, []);

  return {
    eventos,
  };
}
