import { useEffect, useState } from "react";
import { fetchJugadores } from "@/services/jugadores";

export function useJugadores() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    fetchJugadores().then((data) => {
      const { jugadores } = data;

      setJugadores(jugadores);
    });
  }, []);

  const deleteJugador = (id) => {
    setJugadores(jugadores.filter((jugador) => jugador.id !== id));
  };

  return {
    jugadores,
    deleteJugador,
  };
}
