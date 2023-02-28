import { ROUTE_PATHS } from "@/constants";
import { authService } from "./auth";

const baseUrl = "/api/eventos";

const fetchEventos = async () => {
  const response = await fetch(`${baseUrl}/eventos`);
  const data = await response.json();
  return data;
};

const fetchEventosReales = async () => {
  const response = await fetch(baseUrl, {
    headers: {
      ...authService.getAuthorizationHeader()
    }
  });

  const data = await response.json();
  return data;
};

const fetchEventoById = async (id) => {
  const response = await fetch(
    `${ROUTE_PATHS.eventos}/${id}`, {
      headers: {
        ...authService.getAuthorizationHeader()
      }
    });
  const data = await response.json();
  return data;
};

const deleteEvento = async (id) => {};

const getDeporteEvento = (evento) => {
  const { formatoEventoDeportivo, deporte } = evento;
  return formatoEventoDeportivo?.deporte?.nombre || deporte?.nombre;
}; 

const eventosService = {
  deleteEvento,
  fetchEventoById,
  fetchEventos,
  fetchEventosReales,
  getDeporteEvento,
};

export { eventosService, fetchEventos, deleteEvento, fetchEventosReales, fetchEventoById };
