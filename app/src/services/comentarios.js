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

  const headers = {
    "Content-Type": "application/json",
    Authorization: token,
  };

  const response = fetch(baseUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({ comentario, AnuncioId: anuncioId }),
  });

  return response.then((res) => res.json());
};

export const deleteComentario = async (id) => {
  // Ejecutar la función cada que se llama al Token, por si cambia.
  const token = authService.getBearerToken();

  const headers = {
    Authorization: token,
  };

  const response = fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers,
  });

  return response.then((res) => res.json());
};
