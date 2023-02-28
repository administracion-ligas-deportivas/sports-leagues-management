import { ROUTE_PATHS } from "@/constants";
import { authService } from "./auth";

const createPartido = async ({
  canchaId,
  estadisticoId,
  fecha,
  hora,
  notas,
  efectuado = false,
  localId,
  visitanteId,
  localPuntos,
  visitantePuntos,
  eventoId
} = {}) => {
  console.log({ 
    canchaId,
    estadisticoId,
    fecha,
    hora,
    notas,
    efectuado,
    localId,
    visitanteId,
    localPuntos,
    eventoId,
    visitantePuntos, 
  });

  const equipos = {
    local: {
      id: localId,
      puntos: localPuntos,
    },
    visitante: {
      id: visitanteId,
      puntos: visitantePuntos,
    },
  };

  const partido = {
    canchaId,
    estadisticoId,
    fecha,
    efectuado,
    equipos
  };

  const response = await fetch(
    // /eventos/:eventoxId/partidos
    `${ROUTE_PATHS.eventos}/${eventoId}/partidos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authService.getAuthorizationHeader(),
      },
      body: JSON.stringify(partido),
    });

  return await response.json();  
};

export const partidosService = {
  createPartido,
};
