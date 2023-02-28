import { ROUTE_PATHS } from "@/constants";
import { authService } from "./auth";

const fetchPartidos = async () => {
  const response = await fetch(ROUTE_PATHS.partidos, {
    headers: {
      ...authService.getAuthorizationHeader()
    }
  });
  return await response.json();
};

const fetchPartidoById = async (id) => {
  return await fetch(`${ROUTE_PATHS.partidos}/${id}`, {
    headers: authService.getAuthorizationHeader()
  })
    .then(res => res.json());
};

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

const getEquiposStringInPartido = (partido) => {
  return partido?.equipos?.map(({ nombre }) => {
    return nombre;
  }).join(" vs ");
};

export const partidosService = {
  createPartido,
  fetchPartidos,
  getEquiposStringInPartido,
  fetchPartidoById
};
