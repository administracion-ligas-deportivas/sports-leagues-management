import { fetchEstados, fetchMunicipiosEstado } from "@/services/estados";
import { useEffect, useState } from "react";

export function useEstados() {
  const [estados, setEstados] = useState([]);
  const [currentEstado, setCurrentEstado] = useState({
    nombre: "",
    id: null,
    municipios: [],
  });

  useEffect(() => {
    fetchEstados().then((estados) => {
      setEstados(estados);
    });
  }, []);

  useEffect(() => {
    const sortedEstados = estados.sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
    );

    setEstados(sortedEstados);
  }, [estados]);

  const findMunicipiosEstado = async (estadoId) => {
    const foundEstado = estados.find((estado) => estado.id === estadoId);

    console.log({ foundEstado });

    // No volver a hacer petición al servidor si el estado ya tiene municipios.
    if (!foundEstado || foundEstado?.municipios?.length) return;
    console.log("El estado no tiene municipios");

    fetchMunicipiosEstado(estadoId).then((municipios) => {
      const newEstado = { ...foundEstado, municipios };

      const newEstados = estados.filter((estado) => estado !== foundEstado);
      setEstados([...newEstados, newEstado]);
      console.log({ newEstado, newEstados, estados });

      setCurrentEstado(newEstado);
    });
  };

  const resetCurrentEstado = () => {
    setCurrentEstado(null);
  };

  return {
    estados,
    currentEstado,
    findMunicipiosEstado,
    resetCurrentEstado,
  };
}
