import axios from "axios";
import { authService } from "./auth";

const baseUrl = "/api/comentarios";

export const fetchComentariosByAnuncioId = async (anuncioId) => {
  const response = await fetch(`${baseUrl}/${anuncioId}`);
  const data = await response.json();
  return data;
};

export const createComentario = async (anuncioId, comentario) => {
  // Ejecutar la función cada que se llama al Token, por si cambia.
  const token = authService.getBearerToken();

  const config = {
    headers: {
      Authorization: token,
    },
  };
  const request = axios.post(
    baseUrl,
    {
      comentario,
      AnuncioId: anuncioId,
    },
    config
  );

  return request.then((response) => response.data);
};

export const deleteComentario = async (id) => {
  // Ejecutar la función cada que se llama al Token, por si cambia.
  const token = authService.getBearerToken();

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const request = axios.delete(`${baseUrl}/${id}`, config);

  return request.then((response) => response.data);
};
